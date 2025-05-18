import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";

import "./globals.css";


const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
})

const inter = Inter({
  variable: "--font-inter"
})



export const metadata: Metadata = {
  title: "Enzo Rodrigues",
  description: "My personal portfolio with next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

