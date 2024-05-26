import type { Metadata } from "next";
import { Lato, Raleway, IBM_Plex_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './provider'

const raleway = Raleway({
  weight: ['100','200','300','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rale',
})
const lato = Lato({
  weight: ['100','300','400','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})
const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['100','200','300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_mono',
})
const space_mono = Space_Mono({
  weight: ['400','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: "Neebo",
  description: "Your Friendly AI Sidekick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${lato.variable}  ${ibm_plex_mono.variable} ${space_mono.variable}`}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
