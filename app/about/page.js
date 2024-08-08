'use client';

import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='relative w-[50rem] h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/about-banner.jpg)', objectFit: 'cover' }}>
        <div className='w-full h-full bg-gradient-to-r from-black via-transparent to-transparent' />

        <button
          onClick={() => router.push('/')}
          className='absolute top-4 left-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300'
        >
          <img
            src='/back.png'
            alt='Back'
            className='h-8 w-8'
          />
        </button>
      </div>

      <div className='flex-1 p-12 bg-white flex flex-col justify-center items-center'>
        <div className='w-full max-w-3xl'>
          <div className='flex flex-col mb-12 mt-[-4rem]'>
            <h1 className='text-4xl font-bold mb-6 text-gray-900'>
              About Me
            </h1>
            <p className='text-lg text-gray-700'>
              My name is Angelica and I'm currently studying Software Development.
            </p>
            <p className='text-lg text-gray-700'>
              I'm extremely passionate about graphic design, web development, and mobile app development.
            </p>
            <p className='text-lg text-gray-700'>
              I'm a big fan of animals as I own many myself!
            </p>
            <p className='text-lg text-gray-700'>
              I've included pictures of my dogs, Yuki and Natsu, and two of my cats, Nito and Pippin.
            </p>
            <p className='text-lg text-gray-700'>
              Welcome to Middle Earth is a project I created to showcase my skills and knowledge in React.js and web development.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              To reach out and connect or to simply view my socials, click the links below:
            </p>
            <div className='flex flex-col gap-2 mb-6'>
              <a
                href='https://github.com/wangelca'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/angelica-pekas-72511827b/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                LinkedIn
              </a>
              <a
                href='mailto:angelicaverz31@gmail.com'
                className='text-blue-600 hover:underline'
              >
                Email Me
              </a>
            </div>
          </div>

          <div className='flex flex-col mb-12'>
            <h2 className='text-2xl font-bold mb-6 text-gray-900'>
              Tech Strengths
            </h2>
            <div className='flex flex-wrap justify-center gap-6'>
              {[
                { src: '/cicon.png', label: 'C#' },
                { src: '/cssicon.webp', label: 'CSS' },
                { src: '/html icon.png', label: 'HTML' },
                { src: '/jsicon.webp', label: 'JavaScript' },
                { src: '/nodejsicon.png', label: 'Node.js' },
                { src: '/npmicon.png', label: 'npm' },
                { src: '/pyicon.webp', label: 'Python' },
                { src: '/reacticon.png', label: 'React' },
              ].map((icon) => (
                <div key={icon.label} className='relative flex flex-col items-center group'>
                  <img
                    src={icon.src}
                    alt={icon.label}
                    className='h-16 w-16 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110'
                  />
                  <div className='absolute bottom-0 mb-8 flex items-center justify-center'>
                    <span className='text-sm text-gray-700 bg-white rounded py-1 px-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {icon.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            <div className='flex flex-row gap-4'>
              <img
                src='/natsu.jpg'
                alt='Natsu'
                className='h-56 w-56 object-cover rounded-lg'
              />
              <img
                src='/nito.jpg'
                alt='Nito'
                className='h-56 w-56 object-cover rounded-lg'
              />
              <img
                src='/pip.jpg'
                alt='Pip'
                className='h-56 w-56 object-cover rounded-lg'
              />
              <img
                src='/yuki.jpg'
                alt='Yuki'
                className='h-56 w-56 object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

















