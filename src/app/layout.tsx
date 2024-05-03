import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';

import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import { metaData } from '@/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: metaData.name,
  description: metaData.description,
  icons: [
    {
      url: '/favicon/dark_favicon.ico',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg+xml',
    },

    {
      url: '/favicon/favicon.ico',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg+xml',
    },
  ],

  openGraph: {
    type: 'website',
    url: `${BASE_URL}`,
    title: metaData.name,
    description: metaData.description,
    siteName: metaData.name,
    images: [{ url: metaData.ogpImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter text-base text-main bg-bgMain overflow-x-hidden">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
