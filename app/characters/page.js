'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHobbit, setShowHobbit] = useState(false);
  const [showDescription, setShowDescription] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://the-one-api.dev/v2/character', {
          headers: {
            Authorization: `Bearer vcdxNlUHc3e4EqfBDo3F`
          }
        });

        const allCharacters = response.data.docs;
        const lotrCharacterNames = [
          'Legolas', 'Gimli', 'Gandalf', 'Gollum', 'Aragorn', 'Galadriel',
          'Frodo Baggins', 'Elrond', 'Samwise Gamgee', 'Meriadoc Brandybuck',
          'Saruman', 'Sauron', 'Pippin'
        ];
        const hobbitCharacterNames = [
          'Bilbo Baggins', 'Gandalf', 'Thorin', 'Smaug', 'Sauron', 'Gollum',
          'Balin', 'Elrond', 'Thranduil', 'Bard'
        ];

        const lotrCharacters = allCharacters.filter(character =>
          lotrCharacterNames.includes(character.name)
        );
        const hobbitCharacters = allCharacters.filter(character =>
          hobbitCharacterNames.includes(character.name)
        );

        setCharacters({ lotr: lotrCharacters, hobbit: hobbitCharacters });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='relative w-[50rem] h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/characters-banner.jpg)', objectFit: 'cover' }}>
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

      <div className='flex-1 p-12 bg-white'>
        <h1 className='text-4xl font-bold mb-6 text-gray-900'>Characters</h1>

        {showDescription && (
          <div className='mb-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow'>
            <p className='text-lg text-gray-700 mb-4'>
              Using The Lord of The Rings API, I have inserted the focal point characters for both the LOTR trilogy and The Hobbit trilogy. Click on the movies below to view the main recurring characters for each. If you understand, select Got it.
            </p>
            <button
              onClick={() => setShowDescription(false)}
              className='py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900'
            >
              Got it
            </button>
          </div>
        )}

        <div className='mb-8'>
          <button
            onClick={() => setShowHobbit(false)}
            className={`py-2 px-4 mr-4 font-semibold rounded ${!showHobbit ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-gray-700`}
          >
            The Lord of the Rings
          </button>
          <button
            onClick={() => setShowHobbit(true)}
            className={`py-2 px-4 font-semibold rounded ${showHobbit ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-gray-700`}
          >
            The Hobbit
          </button>
        </div>

        <section>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {(showHobbit ? characters.hobbit : characters.lotr).map(character => (
              <div key={character._id} className='bg-white p-4 rounded shadow'>
                <h3 className='text-2xl font-semibold text-gray-900'>{character.name}</h3>
                <p className='text-gray-700'>{character.realm}</p>
                <p className='text-gray-700'>{character.race}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}








