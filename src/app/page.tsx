import { DividerVerticalIcon } from '@radix-ui/react-icons';
import textFile from '@/assets/text.json';
import MyButton from '@/components/button';
import line from '@/assets/line1.png';
import Image from 'next/image';

export default function Home() {
  const main = textFile.texts.main;
  const about = textFile.texts.about;
  const description = textFile.texts.description;
  const interests = textFile.texts.interests;

  const socialDesc = textFile.texts.socialDesciption;
  const socials = textFile.social;

  return (
    <div className='flex w-full flex-row items-center justify-center gap-2'>
      {/* left side */}
      <div className='flex w-1/3 flex-col gap-4'>
        <div>
          <h1>Hi 👋🏽,</h1>
          <h1>my name is</h1>
          <h1>Thea Jenny E. Kolnes ✨</h1>
        </div>
        <p>{about}</p>
        <p className='font-medium'>{description}</p>
        <div className='grid grid-cols-2'>
          {interests.map((interest, k) => (
            <p key={k}>{interest}</p>
          ))}
        </div>
      </div>
      <Image src={line} alt='Divider' />
      {/* right side */}
      <div className='flex flex-col p-10'>
        <p className='font-medium'>{socialDesc}</p>
        {socials.map((social, k) => (
          <MyButton key={k} title={social.title} link={social.link} />
        ))}
      </div>
    </div>
  );
}
