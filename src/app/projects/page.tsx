/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
  return (
    <div className='flex w-full flex-col items-center space-y-8 rounded-[10px] px-10 md:py-20'>
      <h1 className='text-center uppercase'>Projects🔧</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
        <div className='flex max-w-sm flex-col items-center space-y-4 rounded-[20px] border-2 border-secondary p-4'>
          <a href='https://melbourne.vercel.app' target='_'>
            <h3 className='text-center underline'>Melbourne Dagbok🇦🇺</h3>
          </a>
          <p className='text-sm'>
            My travel blog from my exchange semester in Ausralia, Melbourne.
            During my travels I uploaded posts and pictures of my life down
            under. This website uses{' '}
            <a href='https://melbourne.sanity.studio'>
              <u>sanity</u>
            </a>{' '}
            and tailwindCSS in React.
          </p>
        </div>

        <div className='flex max-w-sm flex-col items-center space-y-4 rounded-[20px] border-2 border-secondary p-4'>
          <a href='https://memoriies.vercel.app/' target='_'>
            <h3 className='text-center underline'>Memories🎞️</h3>
          </a>
          <p className='text-sm'>
            Website for uploading my pictures that I am proud of via{' '}
            <a href='https://memories.sanity.studio/desk'>
              <u>sanity</u>
            </a>
            . This website is built in React and tailwindCSS.
          </p>
        </div>

        <div className='flex max-w-sm flex-col items-center space-y-4 rounded-[20px] border-2 border-secondary p-4'>
          <a href='https://echo.uib.no/' target='_'>
            <h3 className='text-center underline'>echo Webkom💻</h3>
          </a>
          <p className='text-sm'>
            Webkom is a sub-group of our student association under the
            Department of Informatics at University in Bergen. Webkom runs the
            student association's websites.`
          </p>
        </div>
      </div>
    </div>
  );
}
