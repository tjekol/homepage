import { Separator } from '@heroui/react';
import file from '@/lib/text.json';
import Socials from '@/components/socials';
import NavigationBar from '@/components/nav-bar';

export default function Home() {
  const main = file.texts.main;
  const about = file.texts.about;
  const desc = file.texts.description;
  const socialDesc = file.texts.socialDesciption;
  const interests = file.texts.interests;

  return (
    <div className='bg-background flex min-h-screen flex-col items-center justify-between gap-4 p-10 font-sans md:p-10'>
      <NavigationBar />
      <main className='flex w-full flex-col justify-center gap-8 md:flex-row md:items-center'>
        <div className='flex w-full flex-col gap-2 md:w-1/3'>
          <h1 className='whitespace-pre-line'>{main}</h1>
          <ul className='list-inside list-disc text-wrap'>
            {about.split('\n').map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <span className='mt-2 font-semibold'>{desc}</span>
          <div className='grid grid-cols-2'>
            {interests.map((interest, k) => (
              <span key={k}>{interest}</span>
            ))}
          </div>
        </div>
        <Separator
          orientation='vertical'
          className='hidden border-black md:inline'
        />
        <Separator
          orientation='horizontal'
          className='visble border-black md:hidden'
        />
        <div className='flex flex-col gap-2'>
          <h2>{socialDesc}</h2>
          <Socials />
        </div>
      </main>
      <span className='hover:underline'>
        <a href='https://github.com/tjekol/homepage'>Made by TJEKOL🦋</a>
      </span>
    </div>
  );
}
