'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { MoonIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

function Header() {
  const [activePage, setActivePage] = useState('/');
  const [themeDark, setThemeDark] = useState(false);

  function isDarkmodeCheck() {
    if (themeDark !== null) {
      if (themeDark === true) {
        document.documentElement.classList.add('dark');
      }
    }
  }

  function themeSwitch() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      if (themeDark !== null) {
        window.localStorage.setItem('isDarkmode', 'false');
      }
    } else {
      document.documentElement.classList.add('dark');
      if (themeDark !== null) {
        window.localStorage.setItem('isDarkmode', 'true');
      }
    }
    setThemeDark(!themeDark);
  }

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
      const themeDark = window.localStorage.getItem('isDarkmode');
      if (themeDark === 'true') {
        document.documentElement.classList.add('dark');
        setThemeDark(true);
      }
      const activePage = window.localStorage.getItem('activePage');
      if (activePage !== '/' && activePage !== null) {
        setActivePage(activePage);
      }
    }
    isDarkmodeCheck();
    activePageCheck();
  }, []);

  return (
    <div className='flex w-5/6 space-x-2'>
      <h2 className='grow'>Thea Jenny E. Kolnes</h2>
      <Button
        variant='link'
        className={
          'flex-none text-2xl ' +
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
          'flex-none text-2xl ' +
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
          'flex-none text-2xl ' +
          (activePage === '/projects'
            ? 'text-text dark:text-text-dark'
            : 'text-primary dark:text-primary-dark')
        }
        onClick={() => activePageSet('/projects')}
        asChild
      >
        <Link href={'/projects'}>Prosjekter</Link>
      </Button>

      <Button
        size='icon'
        variant='ghost'
        className='text-text dark:text-text-dark'
        onClick={() => themeSwitch()}
      >
        <MoonIcon className='scale-150' />
      </Button>
    </div>
  );
}

export default Header;
