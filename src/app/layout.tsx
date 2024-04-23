import React from 'react';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bgMainColor text-white font-inter">{children}</body>
    </html>
  );
}
