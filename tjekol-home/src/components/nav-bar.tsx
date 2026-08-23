'use client';

import { Button } from '@heroui/react';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from '@gravity-ui/icons';
import { useTheme } from 'next-themes';

export default function NavigationBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex gap-2 self-end'>
      <Button
        variant='ghost'
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
      <Button variant={pathname === '/' ? 'tertiary' : 'outline'}>
        <a href='/'>Home</a>
      </Button>
      <Button variant={pathname === '/projects' ? 'tertiary' : 'outline'}>
        <a href='projects'>Projects</a>
      </Button>
    </div>
  );
}
