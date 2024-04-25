import React from 'react';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter text-base text-main bg-bgMain">
        {children}
      </body>
    </html>
  );
}
