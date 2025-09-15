import textFile from '@/assets/text.json';
import MyButton from '@/components/button';
import line from '@/assets/verticalLine.png';
import Image from 'next/image';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const main = textFile.texts.main;
  const about = textFile.texts.about;
  const description = textFile.texts.description;
  const interests = textFile.texts.interests;

  const socialDesc = textFile.texts.socialDesciption;
  const socials = textFile.social;

  return (
    <div className='flex w-full flex-col justify-center gap-6 md:flex-row md:items-center'>
      {/* left side */}
      <div className='flex flex-col gap-4 md:w-1/3'>
        <div>
          <h1>Hi 👋🏽,</h1>
          <h1>my name is</h1>
          <h1>Thea Jenny E. Kolnes ✨</h1>
        </div>
        <p className='w-4/5 md:w-full'>{about}</p>
        <p className='font-medium'>{description}</p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {interests.map((interest, k) => (
            <p key={k}>{interest}</p>
          ))}
        </div>
      </div>
      <Image
        src={line}
        alt='Divider'
        className='hidden dark:invert md:inline'
      />
      {/* right side */}
      <div className='flex flex-col gap-2 pt-4 md:p-10'>
        <p className='pb-4 font-medium'>{socialDesc}</p>
        {socials.map((social, k) => (
          <MyButton
            key={k}
            title={social.title}
            link={social.link}
            tag={social.tag}
          />
        ))}
      </div>
    </div>
  );
}
