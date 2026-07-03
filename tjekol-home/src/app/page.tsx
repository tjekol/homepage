import { Separator } from '@heroui/react';
import file from '@/lib/text.json';
import Socials from '@/components/socials';
import NavigationBar from '@/components/nav-bar';

export default function Home() {
  const about = file.texts.about;
  const desc = file.texts.description;
  const socialDesc = file.texts.socialDesciption;
  const interests = file.texts.interests;

  return (
    // <div className='flex flex-col flex-1 items-center justify-center bg-background font-sans dark:bg-black'>
    <div className='bg-background flex flex-1 flex-col items-center p-10 font-sans'>
      <NavigationBar />
      <main className='m-auto flex w-full flex-col items-center justify-center gap-4 md:flex-row'>
        <div className='flex w-full flex-col gap-2 md:w-1/3'>
          <div>
            <h1>Hi 👋🏽,</h1>
            <h1>my name is </h1>
            <h1>Thea Jenny E. Kolnes ✨</h1>
          </div>
          <p>{about}</p>
          <span className='font-semibold'>{desc}</span>
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
      <span>Made by TJEKOL🦋</span>
    </div>
  );
}
