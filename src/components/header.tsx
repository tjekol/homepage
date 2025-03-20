'use client';

import { Button } from './ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { NavBar } from './nav-bar';

function Header() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme == 'dark';

  return (
    <div className='flex w-full justify-end'>
      <div className='flex gap-x-2'>
        <Button
          size='icon'
          variant='ghostSecondary'
          className='text-text dark:text-text-dark'
          onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
        >
          <SunIcon className={`scale-130 ${isDarkMode ? 'block' : 'hidden'}`} />
          <MoonIcon
            className={`scale-130 ${isDarkMode ? 'hidden' : 'block'}`}
          />
        </Button>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
