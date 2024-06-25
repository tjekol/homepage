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
    <div className='flex flex-row'>
      <Button
        variant='link'
        className={
          'flex-none text-base md:text-xl px-1 ' +
          (activePage === '/'
            ? 'text-text dark:text-text'
            : 'text-secondary dark:text-text-dark')
        }
        onClick={() => activePageSet('/')}
        asChild
      >
        <Link href={'/'} >Home</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none text-base md:text-xl px-1' +
          (activePage === '/projects'
            ? 'text-text dark:text-text'
            : 'text-secondary dark:text-text-dark')
        }
        onClick={() => activePageSet('/projects')}
        asChild
      >
        <Link href={'/projects'}>Projects</Link>
      </Button>
    </div>
  );
}
