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
          <main className='flex h-screen w-screen flex-col items-center justify-between p-8 md:p-10'>
            <Header />
            {children}
            <p>Made by Thea Jenny Kolnes🦋</p>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
