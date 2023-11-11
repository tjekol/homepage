import Link from 'next/link';
import { Button } from './ui/button';
import { MoonIcon } from '@radix-ui/react-icons';

function Header() {
  return (
    <div className='w-5/6 flex space-x-2'>
      <h1 className='text-secondary grow font-bold'>Thea Jenny E. Kolnes</h1>
      <Button variant='link' className='text-2xl text-secondary flex-none' asChild>
        <Link href={'/'}>
          Hjem
        </Link>
      </Button>
      <Button variant='link' className='text-2xl text-secondary flex-none' asChild>
        <Link href={'/about'}>
          Om meg
        </Link>
      </Button>
      <Button variant='link' className='text-2xl text-secondary flex-none' asChild>
        <Link href={'/project'}>
          Prosjekter
        </Link>
      </Button>
      <Button size='icon' variant='ghost' className='text-secondary'>
        <MoonIcon className='scale-150'/>
      </Button>
    </div>
  );
}

export default Header;
