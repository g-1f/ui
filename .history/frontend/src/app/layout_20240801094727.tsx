import React from 'react';
import { cn } from "@/lib/utils";

// Import your global CSS file
import '@/app/globals.css';  // Adjust this path if necessary

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
          "font-segoe-ui"  // This class will be defined in your CSS
        )}
      >
        {children}
      </body>
    </html>
  );
}