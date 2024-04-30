import '../styles/globals.css';

import React from 'react';

import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Carp Travel',
  description:
    'Uncover Carpathian’s Secrets! We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
  icons: [
    {
      url: '/favicon/dark_favicon.ico',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg+xml',
    },
    {
      url: '/favicon/light_favicon.ico',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg+xml',
    },
  ],
  openGraph: {
    type: 'website',
    url: `${BASE_URL}`,
    title: 'Carp Travel',
    description:
      'Uncover Carpathian’s Secrets! We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
    siteName: 'Carp Travel',
    images: [{ url: '/images/og/og_image.jpg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="font-inter text-base text-main bg-bgMain overflow-x-hidden">
          {children}
        </body>
      </html>
    </>
  );
}
