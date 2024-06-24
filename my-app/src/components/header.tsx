'use client';

import { Button } from './ui/button';
import { MoonIcon, SunIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavBar } from './nav-bar';

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [themeDark, setThemeDark] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
    <div className='w-full space-x-2 flex justify-end'>
      <div className='flex'>
      <Button
          size='icon'
          variant='ghostSecondary'
          className='text-text dark:text-text-dark'
          onClick={() => themeSwitch()}
        >
        {themeDark ? <SunIcon className='scale-150' /> : <MoonIcon className='scale-150' />}
      </Button>
        <div className='visible md:hidden'>
          <Button
            size='icon'
            variant='ghostSecondary'
            className='text-text dark:text-text-dark'
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <Cross1Icon className='scale-150' />
            ) : (
              <HamburgerMenuIcon className='scale-150' />
            )}
          </Button>
        </div>
      </div>
      
      {(openMenu || !isMobile) && <NavBar />}
    </div>
  );
}

export default Header;
