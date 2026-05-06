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
    <div className='flex flex-col flex-1 items-center bg-background font-sans p-10'>
      <NavigationBar />
      <main className='flex flex-col md:flex-row gap-4 m-auto justify-center w-full'>
        <div className='w-full md:w-1/3 gap-2 flex flex-col'>
          <div>
            <h1>Hi 👋🏽,</h1>
            <h1>my name is </h1>
            <h1>Thea Jenny E. Kolnes ✨</h1>
          </div>
          <p>{about}</p>
          <span>{desc}</span>
          <div className='grid grid-cols-2'>
            {interests.map((interest, k) => (
              <span key={k}>{interest}</span>
            ))}
          </div>
        </div>
        <Separator
          orientation='vertical'
          className='border-black hidden md:inline'
        />
        <Separator
          orientation='horizontal'
          className='border-black visble md:hidden'
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
