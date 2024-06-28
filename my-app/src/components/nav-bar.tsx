'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';

enum ActivePage {
  Home,
  Projects
}

export function NavBar() {
  const [activePage, setActivePage] = useState(ActivePage.Home);
  function activePageSet(page: ActivePage) {
    setActivePage(page);
  };

  function onPage(page: ActivePage) {
    return activePage === page;
  }

  return (
    <div className='flex flex-row gap-x-2'>
      <Button
        variant='link'
        className={
          'flex-none text-base md:text-xl px-1 ' +
          (onPage(ActivePage.Home)
            ? 'text-text underline dark:text-text'
            : 'text-secondary dark:text-text-dark')
        }
        onClick={() => activePageSet(ActivePage.Home)}
        asChild
      >
        <Link href={'/'} >Home</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none text-base md:text-xl px-1 ' +
          (onPage(ActivePage.Projects)
            ? 'text-text underline  dark:text-text'
            : 'text-secondary dark:text-text-dark')
        }
        onClick={() => activePageSet(ActivePage.Projects)}
        asChild
      >
        <Link href={'/projects'} >Projects</Link>
      </Button>
    </div>
  );
}
