'use client';

import Tabs from './Tabs';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <main className='flex flex-col items-center justify-center flex-grow p-8'>
        <div className='text-left mb-12' style={{ maxWidth: '70rem' }}>
          <h1 className='text-5xl font-bold mb-4 text-gray-900'>
            Explore Middle Earth
          </h1>
          <p className='text-lg text-gray-600'>
            Explore the rich world created by J.R.R. Tolkien and immerse yourself in the rich lore of Middle Earth.
          </p>
          <p className='text-lg text-gray-600'>
            Provided below are tabs that will guide you through the various aspects of Middle Earth, explore at your own desire.
          </p>
          <p className='text-lg text-gray-600'>
            To find more information about the developer, select the About section.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Tabs />
        </div>
      </main>
    </div>
  );
}













