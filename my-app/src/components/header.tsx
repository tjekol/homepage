import Link from 'next/link';
import { Button } from './ui/button';
import { MoonIcon } from '@radix-ui/react-icons';

function Header() {
  return (
    <div className='flex w-5/6 space-x-2'>
      <h1 className='grow font-bold text-secondary'>Thea Jenny E. Kolnes</h1>
      <Button
        variant='link'
        className='flex-none text-2xl text-secondary'
        asChild
      >
        <Link href={'/'}>Hjem</Link>
      </Button>
      <Button
        variant='link'
        className='flex-none text-2xl text-secondary'
        asChild
      >
        <Link href={'/about'}>Om meg</Link>
      </Button>
      <Button
        variant='link'
        className='flex-none text-2xl text-secondary'
        asChild
      >
        <Link href={'/project'}>Prosjekter</Link>
      </Button>
      <Button size='icon' variant='ghost' className='text-secondary'>
        <MoonIcon className='scale-150' />
      </Button>
    </div>
  );
}

export default Header;
