'use client';

import './globals.css';

import { Inter, Manrope } from '@next/font/google';

import Navbar from '@/components/NavBar';
import Providers from '@/components/Providers';
import { ThemeProvider } from 'next-themes';
import cx from 'classnames';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(manrope.variable, inter.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers>
        <body className=" bg-zinc-200 bg-[url('/grid-2.svg')] text-zinc-800 transition-all duration-500 dark:bg-gray-1100 dark:text-slate-50 ">
          {children}
        </body>
      </Providers>
    </html>
  );
}
