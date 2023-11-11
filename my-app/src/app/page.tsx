import Image from 'next/image';
import meg from '@/app/images/cv-bilde.jpeg';
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Header from '@/components/header';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 justify-between bg-primary">
      <Header />

      <div className='w-2/3 bg-cream rounded-[10px] p-10 space-y-8'>
        <h1 className='text-secondary font-bold text-center uppercase'>✨Hei på deg✨</h1>
        <div className='flex justify-center space-x-10 items-center p-8'>
          <Image src={meg.src} width={200} height={200} alt={''} style={{borderRadius: '100px'}}/>
          <p className='text-lg text-secondary'>
						Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 i Bergen på UIB.
          </p>
        </div>
        <div className='flex justify-center space-x-8'>
          <Button variant='secondary' size='lg' className='text-cream text-base' asChild>
            <Link href={'https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/'} target='_blank'>
              <LinkedInLogoIcon className='mr-2 scale-150' />
							LinkedIn
            </Link>
          </Button>
          <Button variant='secondary' size='lg' className='text-cream text-base' asChild>
            <Link href={'https://github.com/tjekol'} target='_blank'>
              <GitHubLogoIcon className='mr-2 scale-150' />
							Github
            </Link>
          </Button>
          <Button variant='secondary' size='lg' className='text-cream text-base' asChild>
            <Link href={'mailto:thea.jenny02@gmail.com'}>
              <EnvelopeClosedIcon className='mr-2 scale-150' />
							Mail
            </Link>
          </Button>
        </div>
      </div>

      <div className='text-secondary'>Made by Thea Jenny Kolnes🦋</div>
    </main>
  );
}
