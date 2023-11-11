import Image from 'next/image';
import meg from '@/app/images/cv-bilde.jpeg';
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, MoonIcon } from '@radix-ui/react-icons';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-10 justify-between bg-primary">
			<div className='w-5/6 flex space-x-2'>
				<h1 className='text-secondary grow font-bold'>Thea Jenny E. Kolnes</h1>
				<Button variant='link' className='text-2xl text-secondary flex-none'>Hjem</Button>
				<Button variant='link' className='text-2xl text-secondary flex-none'>Om meg</Button>
				<Button variant='link' className='text-2xl text-secondary flex-none'>Prosjekter</Button>
				<Button size='icon' variant='ghost' className='text-secondary'>
					<MoonIcon className='scale-150'/>
				</Button>
			</div>

			<div className='w-2/3 bg-cream rounded-[10px] p-10 space-y-8'>
				<h1 className='text-secondary font-bold text-center uppercase'>✨Hei på deg✨</h1>
				<div className='flex justify-between space-x-10 items-center'>
					<Image src={meg.src} width={200} height={200} alt={''} style={{borderRadius: '100px'}}/>
					<p className='text-lg text-secondary'>Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 i Bergen på UIB.</p>
				</div>
				<div className='flex justify-center space-x-8'>
					<Button variant='secondary' size='lg' className='text-cream text-base'>
						<LinkedInLogoIcon className='mr-2 scale-150' />
						LinkedIn
					</Button>
					<Button variant='secondary' size='lg' className='text-cream text-base'>
						<GitHubLogoIcon className='mr-2 scale-150' />
						Github
					</Button>
					<Button variant='secondary' size='lg' className='text-cream text-base'>
						<EnvelopeClosedIcon className='mr-2 scale-150' />
						Mail
					</Button>
				</div>
			</div>

			<div className='text-secondary'>Made by Thea Jenny Kolnes🦋</div>
		</main>
	);
}
