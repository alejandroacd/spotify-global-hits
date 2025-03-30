import { Geist, Geist_Mono } from "next/font/google";
import '../app/globals.css'; // Asegúrate de que la ruta sea correcta
import Header from "@/components/header";
import { Providers } from "./providers";
import { Metadata } from "next";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "00's Global Hits: Save your favorite 00's songs",
  description: "Discover the best 00's songs on Spotify",
  icons: {
    icon: '/spotifylogo.svg', 
    apple: '/spotifylogo.svg', 
  },
  openGraph: {
    title: "00's Global Hits: Save your favorite 00's songs",
    description: "Discover the best 00's songs on Spotify",
    url: 'https://yourdomain.com', 
    siteName: "00's Global Hits: Save your favorite 00's songs",
    images: [
      {
        url: '/spotifylogo.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "00's Global Hits",
    description: "Discover the best 00's songs on Spotify",
    images: ['spotifylogo.svg'], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-gradient-to-br from-zinc-800 to-black bg-no-repeat min-h-screen  ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
