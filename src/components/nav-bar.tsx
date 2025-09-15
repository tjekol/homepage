'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

enum ActivePage {
  Home,
  Project,
}

export function NavBar() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(ActivePage.Home);

  const findActivePage = () => {
    pathname == '/project'
      ? setActivePage(ActivePage.Project)
      : setActivePage(ActivePage.Home);
  };

  useEffect(() => {
    findActivePage();
  });

  return (
    <div className='flex flex-row gap-x-2'>
      <Button
        variant='link'
        className={
          'flex-none px-1 text-base  md:text-xl ' +
          (activePage === ActivePage.Home
            ? ' text-text underline dark:text-text-dark'
            : 'font-normal text-secondary dark:text-text-dark/60')
        }
        onClick={() => setActivePage(ActivePage.Home)}
        asChild
      >
        <Link href={'/'}>Home</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none px-1 text-base md:text-xl ' +
          (activePage === ActivePage.Project
            ? 'text-text underline  dark:text-text-dark'
            : 'font-normal text-secondary dark:text-text-dark/60')
        }
        onClick={() => setActivePage(ActivePage.Project)}
        asChild
      >
        <Link href={'/project'}>Projects</Link>
      </Button>
    </div>
  );
}
