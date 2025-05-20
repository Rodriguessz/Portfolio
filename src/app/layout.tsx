import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import {getLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';

import "./globals.css";


const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ['latin'],
  preload: true
})


export const metadata: Metadata = {
  title: "Enzo Rodrigues",
  description: "My personal portfolio with next.js",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
 
  
  return (
    <html lang={locale}>
      <body
        className={`${jetBrains.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

