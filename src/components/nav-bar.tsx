'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';

enum ActivePage {
  Home,
  Project,
}

export function NavBar() {
  const [activePage, setActivePage] = useState(ActivePage.Home);
  function activePageSet(page: ActivePage) {
    setActivePage(page);
  }

  function onPage(page: ActivePage) {
    return activePage === page;
  }

  return (
    <div className='flex flex-row gap-x-2'>
      <Button
        variant='link'
        className={
          'flex-none px-1 text-base  md:text-xl ' +
          (onPage(ActivePage.Home)
            ? ' text-text underline dark:text-text-dark'
            : 'font-normal text-secondary dark:text-text-dark/60')
        }
        onClick={() => activePageSet(ActivePage.Home)}
        asChild
      >
        <Link href={'/'}>Home</Link>
      </Button>
      <Button
        variant='link'
        className={
          'flex-none px-1 text-base md:text-xl ' +
          (onPage(ActivePage.Project)
            ? 'text-text underline  dark:text-text-dark'
            : 'font-normal text-secondary dark:text-text-dark/60')
        }
        onClick={() => activePageSet(ActivePage.Project)}
        asChild
      >
        <Link href={'/project'}>Projects</Link>
      </Button>
    </div>
  );
}
