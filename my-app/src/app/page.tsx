import Image from 'next/image';
import meg from '@/app/images/cv-bilde.jpeg';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-primary">
			<div className='w-5/6 flex space-x-4 mb-20'>
				<h1 className='text-dark grow font-bold'>Thea Jenny E. Kolnes</h1>
				<h2 className='text-dark flex-none'>Hjem</h2>
				<h2 className='text-dark flex-none'>Om meg</h2>
				<h2 className='text-dark flex-none'>Prosjekter</h2>
			</div>

			<div className='w-1/2 bg-secondary rounded-[10px] p-10'>
				<h1 className='text-dark font-bold text-center'>✨Hei på deg✨</h1>
				<div className='flex justify-between space-x-10 items-center'>
					<Image src={meg.src} width={200} height={200} alt={''} style={{borderRadius: '100px'}}/>
					<p className='text-lg text-dark'>Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 i Bergen på UIB.</p>
				</div>
			</div>

		</main>
	);
}
