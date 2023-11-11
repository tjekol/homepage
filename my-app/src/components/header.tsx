import Link from 'next/link';
import { Button } from './ui/button';
import { MoonIcon } from '@radix-ui/react-icons';

function Header() {
  return (
    <div className='w-5/6 flex space-x-2'>
      <h2 className='grow'>Thea Jenny E. Kolnes</h2>
      <Button
        variant='link'
        className='flex-none text-2xl text-text'
        asChild
      >
        <Link href={'/'}>Hjem</Link>
      </Button>
      <Button
        variant='link'
        className='flex-none text-2xl text-text'
        asChild
      >
        <Link href={'/about'}>Om meg</Link>
      </Button>
      <Button
        variant='link'
        className='flex-none text-2xl text-text'
        asChild
      >
        <Link href={'/projects'}>Prosjekter</Link>
      </Button>
      <Button size='icon' variant='ghost' className='text-text'>
        <MoonIcon className='scale-150' />
      </Button>
    </div>
  );
}

export default Header;
