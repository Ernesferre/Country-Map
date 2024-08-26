'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ApolloProvider>
  );
}
