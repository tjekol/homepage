import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thea Jenny E. Kolnes Website',
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
          <main className='flex min-h-screen flex-col items-center justify-between space-y-8 bg-primary p-8 dark:bg-background-dark md:p-10'>
            <Header />
            <div className='h-5/6 w-full grow md:w-5/6'>{children}</div>
            <div className='text-secondary dark:text-text-dark'>
              Made by Thea Jenny Kolnes🦋
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
