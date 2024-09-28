import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const intel = Inter({subsets: ["latin"], variable: '--font-inter'})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon Banking Application",
  description: "Horizon Banking Application is a model banking platform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};
 
export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${intel.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
