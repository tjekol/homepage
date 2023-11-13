'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function NavBar() {
  const [activePage, setActivePage] = useState('/');

  function activePageCheck() {
    const activePage = window.localStorage.getItem('activePage');
    if (activePage !== null) {
      window.localStorage.setItem('activePage', activePage);
    }
  }

  function activePageSet(page: string) {
    if (activePage !== null) {
      window.localStorage.setItem('activePage', page);
      setActivePage(page);
    }
  }

  useEffect(() => {
    if (window !== undefined) {
      const activePage = window.localStorage.getItem('activePage');
      if (activePage !== '/' && activePage !== null) {
        setActivePage(activePage);
      }
    }
    activePageCheck();
  }, []);

  return (
    <div className='flex flex-col md:flex-row'>
      <Button
        variant='link'
        className={
          'flex-none text-xl md:text-2xl ' +
          (activePage === '/'
            ? 'text-text dark:text-text-dark'
            : 'text-primary dark:text-primary-dark')
        }
        onClick={() => activePageSet('/')}
        asChild
      >
        <Link href={'/'}>Hjem</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none text-xl md:text-2xl ' +
          (activePage === '/about'
            ? 'text-text dark:text-text-dark'
            : 'text-primary dark:text-primary-dark')
        }
        onClick={() => activePageSet('/about')}
        asChild
      >
        <Link href={'/about'}>Om meg</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none text-xl md:text-2xl ' +
          (activePage === '/projects'
            ? 'text-text dark:text-text-dark'
            : 'text-primary dark:text-primary-dark')
        }
        onClick={() => activePageSet('/projects')}
        asChild
      >
        <Link href={'/projects'}>Prosjekter</Link>
      </Button>
    </div>
  );
}
