// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
  }

  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
  }
}

export interface Session {
  accessToken?: string;
  accessTokenExpires?: number;
  refreshToken?: string;
  error?: string;
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } & DefaultSession['user'];
}

export interface JWT {
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
}