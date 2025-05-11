import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";


const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
})



export const metadata: Metadata = {
  title: "My portfolio",
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

