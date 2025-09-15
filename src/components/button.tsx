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
  tag,
}: {
  title: string;
  link: string;
  tag: string;
}) {
  return (
    <div className='flex flex-row items-center'>
      <Button
        variant='link'
        size='sm'
        className='text-base font-light text-text dark:brightness-0 dark:invert dark:saturate-0'
        asChild
      >
        <Link href={link} target='_blank'>
          {title == 'linkedin' && (
            <LinkedInLogoIcon className='mr-2 scale-150' />
          )}
          {title == 'github' && <GitHubLogoIcon className='mr-2 scale-150' />}
          {title == 'email' && (
            <EnvelopeClosedIcon className='mr-2 scale-150' />
          )}
          <p>{tag}</p>
        </Link>
      </Button>
    </div>
  );
}
