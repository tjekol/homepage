import { Button } from '@/components/ui/button';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import textFile from '@/assets/text.json';

export default function Home() {
  const mainText = textFile.texts.main;
  const aboutText = textFile.texts.about;

  return (
    <div className='flex w-full flex-col items-center space-y-4 rounded-[10px] py-0 md:px-10 md:py-20'>
      <h1 className='text-center'>{mainText}</h1>
      <p className='w-5/6 pb-4 text-center md:w-2/5'>{aboutText}</p>
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
