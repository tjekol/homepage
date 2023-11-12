import Image from 'next/image';
import meg from '@/app/images/cv-bilde.jpeg';
import { Button } from '@/components/ui/button';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full space-y-8 rounded-[10px] bg-secondary/80 px-10 py-20 dark:bg-secondary-dark'>
      <h1 className='text-center uppercase'>Hei på deg✨</h1>
      <div className='flex items-center justify-center space-x-8 p-6'>
        <Image
          src={meg.src}
          width={200}
          height={200}
          alt={''}
          style={{ borderRadius: '100px' }}
        />
        <p className='w-1/2 text-lg'>
          Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 i
          Bergen på UIB.
        </p>
      </div>
      <div className='flex justify-center space-x-8'>
        <Button
          variant='default'
          size='lg'
          className='text-base text-text'
          asChild
        >
          <Link
            href={'https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/'}
            target='_blank'
          >
            <LinkedInLogoIcon className='mr-2 scale-150' />
            LinkedIn
          </Link>
        </Button>
        <Button
          variant='default'
          size='lg'
          className='text-base text-text'
          asChild
        >
          <Link href={'https://github.com/tjekol'} target='_blank'>
            <GitHubLogoIcon className='mr-2 scale-150' />
            Github
          </Link>
        </Button>
        <Button
          variant='default'
          size='lg'
          className='text-base text-text'
          asChild
        >
          <Link href={'mailto:thea.jenny02@gmail.com'}>
            <EnvelopeClosedIcon className='mr-2 scale-150' />
            Mail
          </Link>
        </Button>
      </div>
    </div>
  );
}
