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
    <div className='flex w-full flex-col items-center space-y-4 rounded-[10px] py-0 md:px-10 md:py-20'>
      <Image
        className='max-w-40 md:max-w-60'
        src={meg.src}
        width={200}
        height={200}
        alt={''}
        style={{ borderRadius: '100px' }}
      />
      <h1 className='text-center'>Hi 👋🏽, I’m Thea Jenny E. Kolnes ✨</h1>
      <p className='w-5/6 pb-4 text-center dark:text-text-dark md:w-2/5'>
        MSc in Software Engineering 💻 at University in Bergen/Western Norway
        University of Applied Sciences. I take an interest in video editing📹,
        coding👩🏽‍💻, photography📸 and art🎨.
      </p>
      <div className='flex flex-row md:space-x-2'>
        <Button
          variant='link'
          size='sm'
          className='text-base text-text'
          asChild
        >
          <Link
            href={'https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/'}
            target='_blank'
          >
            <LinkedInLogoIcon className='mr-2 scale-150' />
          </Link>
        </Button>
        <Button
          variant='link'
          size='sm'
          className='text-base text-text'
          asChild
        >
          <Link href={'https://github.com/tjekol'} target='_blank'>
            <GitHubLogoIcon className='mr-2 scale-150' />
          </Link>
        </Button>
        <Button
          variant='link'
          size='sm'
          className='text-base text-text'
          asChild
        >
          <Link href={'mailto:thea.jenny02@gmail.com'}>
            <EnvelopeClosedIcon className='mr-2 scale-150' />
          </Link>
        </Button>
      </div>
    </div>
  );
}
