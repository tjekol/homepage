import { Button } from '@/components/ui/button';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function MyButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className='flex flex-row items-center'>
      <Button variant='link' size='sm' className='text-base text-text' asChild>
        <Link href={link} target='_blank'>
          {title == 'linkedin' && (
            <LinkedInLogoIcon className='mr-2 scale-150' />
          )}
          {title == 'github' && <GitHubLogoIcon className='mr-2 scale-150' />}
          {title == 'email' && (
            <EnvelopeClosedIcon className='mr-2 scale-150' />
          )}
        </Link>
      </Button>
      <p>{title}</p>
    </div>
  );
}
