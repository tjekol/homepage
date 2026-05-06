import { Button } from '@heroui/react';
import { Envelope, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';
import file from '@/lib/text.json';

interface Social {
  title: string;
  link: string;
  tag: string;
}

export default function Socials() {
  const socials = file.socials;
  return (
    <div className='flex flex-col gap-1'>
      {socials.map((social: Social, k) => (
        <Button variant='ghost' key={k}>
          {social.title === 'email' ? (
            <Envelope />
          ) : social.title === 'github' ? (
            <LogoGithub />
          ) : (
            social.title === 'linkedin' && <LogoLinkedin />
          )}
          <a href={social.link}>
            <span>{social.tag}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
