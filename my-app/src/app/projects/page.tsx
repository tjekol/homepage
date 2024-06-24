import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className='w-full flex flex-col items-center space-y-8 rounded-[10px] px-10 py-20'>
      <h1 className='text-center uppercase'>Prosjekter🔧</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        <div className='flex flex-col items-center space-y-4 border-2 rounded-[20px] border-secondary p-4'>
          <a href="https://melbourne.vercel.app" target='_'>
            <h3 className='text-center hover:underline'>Melbourne Dagbok🇦🇺</h3>
          </a>
          <p className='text-sm'>
            Min blogg for reisen min til Melbourne. Her legger jeg ut bilder og poster om hva
            jeg gjør i Melbourne. Denne nettsiden bruker også <a href="https://melbourne.sanity.studio"><u>sanity</u></a> og tailwindCSS.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-4 border-2 rounded-[20px] border-secondary p-4'>
          <a href="https://memoriies.vercel.app/" target='_'>
            <h3 className='text-center hover:underline'>Memories🎞️</h3>
          </a>
          <p className='text-sm'>
            Dette er en nettside hvor jeg laster opp bilder via <a href="https://memories.sanity.studio/desk"><u>Sanity</u></a>. Nettsiden
            bruker Next.js og tailwindCSS.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-4 border-2 rounded-[20px] border-secondary p-4'>
          <a href="https://echo.uib.no/" target='_'>
            <h3 className='text-center hover:underline'>echo Webkom💻</h3>
          </a>
          <p className='text-sm'>
            Webkom er en undergruppe under linjeforeningen echo, som er
            linjeforeningen til Institutt for Informatikk på UIB. Denne
            undergruppa drifter nettsidene til echo.
          </p>
        </div>
      </div>
    </div>
  );
}
