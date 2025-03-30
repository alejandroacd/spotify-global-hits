// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// Type declarations
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
}

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

async function refreshAccessToken(token: { refreshToken?: string; [key: string]: any }) {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: token.refreshToken || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) throw data;

    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + Number(data.expires_in) * 1000,
      refreshToken: data.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "user-read-email user-library-read user-library-modify",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: Date.now() + Number(account.expires_in ?? 3600) * 1000,
        };
      }

      // Type guard to ensure accessTokenExpires is a number
      if (token.accessTokenExpires && typeof token.accessTokenExpires === 'number' && 
          Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (typeof token.accessToken === 'string') {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };