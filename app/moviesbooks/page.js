'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function About() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('The Lord of the Rings');

  const lotrBooks = [
    { name: 'The Fellowship of the Ring', image: '/fellowshipbook.jpg', link: 'https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring' },
    { name: 'The Two Towers', image: '/twotowersbook.jpg', link: 'https://www.goodreads.com/book/show/61215372-the-two-towers?ref=nav_sb_ss_1_10' },
    { name: 'The Return of the King', image: '/rotkbook.jpg', link: 'https://www.goodreads.com/book/show/61215384-the-return-of-the-king?ref=nav_sb_ss_1_13' }
  ];

  const hobbitBooks = [
    { name: 'The Hobbit', image: '/hobbitbook.jpg', link: 'https://www.goodreads.com/book/show/5907.The_Hobbit' }
  ];

  const lotrMovies = [
    { name: 'The Fellowship of the Ring', image: '/fellowshipmovie.jpg', link: 'https://www.imdb.com/title/tt0120737/' },
    { name: 'The Two Towers', image: '/twotowersmovie.jpg', link: 'https://www.imdb.com/title/tt0167261/' },
    { name: 'The Return of the King', image: '/rotkmovie.jpg', link: 'https://www.imdb.com/title/tt0167260/' }
  ];

  const hobbitMovies = [
    { name: 'An Unexpected Journey', image: '/hobbit1.jpg', link: 'https://www.imdb.com/title/tt0903624/' },
    { name: 'The Desolation of Smaug', image: '/hobbit2.jpg', link: 'https://www.imdb.com/title/tt1170358/' },
    { name: 'The Battle of the Five Armies', image: '/hobbit3.jpg', link: 'https://www.imdb.com/title/tt2310332/' }
  ];

  const renderContent = () => {
    const books = selectedCategory === 'The Lord of the Rings' ? lotrBooks : hobbitBooks;
    const movies = selectedCategory === 'The Lord of the Rings' ? lotrMovies : hobbitMovies;

    return (
      <>
        <div className='mb-8'>
          <h3 className='text-3xl font-semibold mb-4 text-black text-center'>Books</h3>
          <div className='flex flex-wrap justify-center mb-4'>
            {books.map((book, index) => (
              <a key={index} href={book.link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center mx-4 mb-6'>
                <div className='relative group'>
                  <img
                    src={book.image}
                    alt={book.name}
                    className='w-72 h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105'
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-3xl font-semibold mb-4 text-black text-center'>Movies</h3>
          <div className='flex flex-wrap justify-center mb-4'>
            {movies.map((movie, index) => (
              <a key={index} href={movie.link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center mx-4 mb-6'>
                <div className='relative group'>
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className='w-72 h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105'
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='flex min-h-screen bg-gray-200'>
      <div className='relative w-[50rem] h-screen bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: 'url(/movies-banner.jpg)', objectFit: 'cover' }}>
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

      <div className='flex-1 p-12 bg-white rounded-lg shadow-md'>
        <div className='mb-12 text-center'>
          <h2 className='text-4xl font-bold mb-6 text-black'>Choose a Category</h2>
          <p className='text-lg mb-6 text-black'>Click on the images to be redirected to the IMDb or Goodreads pages.</p>
          <div className='flex justify-center space-x-4 mb-8'>
            <button
              onClick={() => setSelectedCategory('The Lord of the Rings')}
              className={`p-4 text-lg font-semibold rounded-lg ${selectedCategory === 'The Lord of the Rings' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} border border-gray-700 hover:bg-gray-300`}
            >
              The Lord of the Rings
            </button>
            <button
              onClick={() => setSelectedCategory('The Hobbit')}
              className={`p-4 text-lg font-semibold rounded-lg ${selectedCategory === 'The Hobbit' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} border border-gray-700 hover:bg-gray-300`}
            >
              The Hobbit
            </button>
          </div>
        </div>

        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}





  







