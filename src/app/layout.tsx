import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TJEK',
  // eslint-disable-next-line quotes
  description: `Thea Jenny's personal website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <main className='flex h-screen w-screen flex-col justify-between p-8 md:items-center md:p-10'>
            <Header />
            {children}
            <a
              target='_'
              href='https://github.com/tjekol'
              className='font-light hover:underline'
            >
              Made by Thea Jenny Kolnes🦋
            </a>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
