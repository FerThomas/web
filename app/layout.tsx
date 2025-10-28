import type { Metadata } from "next";
import "./globals.css";
import { Michroma, Inter } from 'next/font/google';
import Head from "next/head";

const michroma = Michroma({
  subsets: ['latin'],
  weight: '400', // Michroma solo tiene un peso: 400 (regular)
  variable: '--font-michroma', // Variable CSS para Tailwind
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Puedes ajustar los pesos según los necesites
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fer Thomas | Web",
  description: "by FerThomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <body
        className={`${michroma.variable}${inter.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
