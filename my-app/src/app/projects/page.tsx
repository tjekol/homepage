import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className='w-full flex flex-col items-center space-y-8 rounded-[10px] bg-secondary/80 px-10 py-20'>
      <h1 className='text-center uppercase'>
        ✨Prosjekter✨
      </h1>
      <div className='flex flex-col items-center space-y-4'>
        <h3 className='text-center'>Webkom💻</h3>
        <p className='text-center w-1/2'>
          Webkom er en undergruppe under linjeforeningen echo, som er linjeforeningen til Institutt for Informatikk på UIB. Denne undergruppa drifter nettsidene til echo.
        </p>
        <div className='flex flex-row space-x-4'>
          <Button>
            <Link href='https://echo.uib.no/'>
              echo.uib.no
            </Link>
          </Button>
          <Button>
            <Link href='https://beta.echo-webkom.no/'>
              beta.echo-webkom.no
            </Link>
          </Button>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-4'>
        <h3>Memories🎞️</h3>
        <p className='text-center w-1/2'>
          Dette er en nettside hvor jeg laster opp bilder via Sanity. Nettsiden bruker Next.js og tailwindCSS.
        </p>
        <Button>
          <Link href='https://memories-tjekol.vercel.app/'>memories-tjekol.vercel.app</Link>
        </Button>
      </div>
    </div>
  );
}
