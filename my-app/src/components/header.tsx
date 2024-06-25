'use client';

import { Button } from './ui/button';
import {
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { NavBar } from './nav-bar';

function Header() {
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

  useEffect(() => {
    if (window !== undefined) {
      const themeDark = window.localStorage.getItem('isDarkmode');
      if (themeDark === 'true') {
        document.documentElement.classList.add('dark');
        setThemeDark(true);
      }
    }
    isDarkmodeCheck();
  }, []);

  return (
    <div className='flex w-full justify-end'>
      <div className='flex'>
        <Button
          size='icon'
          variant='ghostSecondary'
          className='text-text dark:text-text-dark'
          onClick={() => themeSwitch()}
        >
          {themeDark ? (
            <SunIcon className='scale-130' />
          ) : (
            <MoonIcon className='scale-130' />
          )}
        </Button>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
