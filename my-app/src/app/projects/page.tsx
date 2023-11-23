import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className='flex w-full flex-col items-center space-y-8 rounded-[10px] bg-secondary/80 px-10 py-20 text-center dark:bg-secondary-dark'>
      <h1 className='text-center uppercase'>Prosjekter🔧</h1>
      <div className='flex flex-col items-center space-y-4'>
        <h3 className='text-center'>Webkom💻</h3>
        <p className='w-4/5 md:w-1/2 '>
          Webkom er en undergruppe under linjeforeningen echo, som er
          linjeforeningen til Institutt for Informatikk på UIB. Denne
          undergruppa drifter nettsidene til echo.
        </p>
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <Button>
            <Link href='https://echo.uib.no/'>echo.uib.no</Link>
          </Button>
          <Button>
            <Link href='https://beta.echo-webkom.no/'>beta.echo-webkom.no</Link>
          </Button>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-4'>
        <h3>Memories🎞️</h3>
        <p className='w-2/3'>
          Dette er en nettside hvor jeg laster opp bilder via Sanity. Nettsiden
          bruker Next.js og tailwindCSS.
        </p>
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <Button>
            <Link href='https://memoriies.vercel.app/'>
              memories-tjekol.vercel.app
            </Link>
          </Button>
          <Button>
            <Link href='https://memories.sanity.studio/desk'>
              memories.sanity.studio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
