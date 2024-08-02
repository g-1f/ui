import React from 'react';
import localFont from 'next/font/local';
import { cn } from "@/lib/utils";

// Import your global CSS file
import '@/app/globals.css';  // Adjust this path if necessary

// Load your local font
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/your-font-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/your-font-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add more variations if needed
  ],
  variable: '--font-my-font',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          myFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}