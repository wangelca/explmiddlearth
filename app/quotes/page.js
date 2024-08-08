'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function About() {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [characterImage, setCharacterImage] = useState('');

  const characters = [
    { id: '1', name: 'Frodo', image: 'https://www.looper.com/img/gallery/frodo-baggins-entire-backstory-explained/intro-1582640416.jpg' },
    { id: '2', name: 'Meriadoc', image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Merry-Brandybuck.The-Lord-of-the-Rings-The-Fellowship-of-the-Ring.webp' },
    { id: '3', name: 'Elrond', image: 'https://metro.co.uk/wp-content/uploads/2020/09/PRI_163534868-e1599343447105.jpg?quality=90&strip=all' },
    { id: '4', name: 'Galadriel', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Galadriel.jpg' },
    { id: '5', name: 'Samwise Gamgee', image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Samwise-Gamgee.The-Lord-of-the-Rings-The-Fellowship-of-the-Ring.webp' },
    { id: '6', name: 'Gimli', image: 'https://assetsio.gnwcdn.com/gimli_OVQOp6S.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' },
    { id: '7', name: 'Legolas', image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Legolas-Traits-Low-Key.jpg' },
    { id: '8', name: 'Gollum', image: 'https://static.wikia.nocookie.net/lotr/images/3/31/580751_418602258175385_1601212863_n.jpg/revision/latest?cb=20120907014131'},
    { id: '9', name: 'Gandalf', image: 'https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/41a9435aa1ddb04b1835c70986edcf94.jpg' },
    { id: '10', name: 'Saruman', image: 'https://reactormag.com/wp-content/uploads/2015/07/LOTR-saruman-740x385.jpg' },
    { id: '11', name: 'Sauron', image: 'https://www.escapistmagazine.com/wp-content/uploads/2022/11/sauron.jpg?fit=1200%2C676' },
    { id: '12', name: 'Balin', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Balin-The-Hobbit.jpg' },
    { id: '13', name: 'Bard', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/bard-closeup.jpg' },
    { id: '14', name: 'Bilbo', image: 'https://cdn.vox-cdn.com/thumbor/OnqCOd14_2wyCsgOo5FQe4hJNns=/0x0:3733x1579/1200x675/filters:focal(1499x515:2095x1111)/cdn.vox-cdn.com/uploads/chorus_image/image/68661007/Lord_of_the_Rings_The_Fellowship_of_the_Ring.mkv_snapshot_00.19.38__2020.11.29_18.16.35_.0.png' },
    { id: '15', name: 'Thranduil', image: 'https://atolkienistperspective.wordpress.com/wp-content/uploads/2013/12/thranduil.jpg' },
    { id: '16', name: 'Smaug', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/smaug-hobbit.jpg' },
  ];

  const fetchQuote = async (characterId) => {
    if (!characterId) {
      setQuote('');
      setCharacterImage('');
      return;
    }

    try {
      const response = await fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, {
        headers: {
          'Authorization': `Bearer vcdxNlUHc3e4EqfBDo3F`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.docs.length > 0) {
        setQuote(data.docs[0]?.dialog || 'No quote found');
        setError('');
      } else {
        setQuote('No quotes found for this character');
        setError('');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('');
      setError('Error fetching quote');
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://the-one-api.dev/v2/quote', {
        headers: {
          'Authorization': `Bearer vcdxNlUHc3e4EqfBDo3F`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const randomQuote = data.docs[Math.floor(Math.random() * data.docs.length)];
      setQuote(randomQuote?.dialog || 'No quote found');
      setError('');
    } catch (error) {
      console.error('Error fetching random quote:', error);
      setQuote('');
      setError('Error fetching random quote');
    }
  };

  const handleCharacterChange = (e) => {
    const characterId = e.target.value;
    setSelectedCharacter(characterId);
    fetchQuote(characterId);

    const selectedCharacter = characters.find(char => char.id === characterId);
    setCharacterImage(selectedCharacter ? selectedCharacter.image : '');
  };

  return (
    <div className='flex min-h-screen bg-gray-200'>
      <div className='relative w-1/3 h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/rivendell.jpg)', objectFit: 'cover' }}>
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
        <h2 className='text-4xl font-bold mb-2 text-black text-center'>Character Quotes</h2>
        <p className='text-center text-gray-600 mb-8'>
          Choose from the main characters listed as in the Characters page to generate a random movie or book quote by them.
        </p>
        <div className='text-center'>
          <select
            onChange={handleCharacterChange}
            className='p-2 border rounded-lg text-black'
          >
            <option value=''>Select a Character</option>
            {characters.map((char) => (
              <option key={char.id} value={char.id}>
                {char.name}
              </option>
            ))}
          </select>
          <button
            onClick={fetchRandomQuote}
            className='ml-4 p-2 bg-gray-200 rounded-lg hover:bg-gray-300'
          >
            Get Random Quote
          </button>
        </div>
        <div className='text-center mt-6'>
          <p className='text-lg text-black mb-4'>{quote}</p>
          {characterImage && (
            <img
              src={characterImage}
              alt={selectedCharacter}
              className='max-w-md mx-auto mb-4 rounded-lg shadow-md'
            />
          )}
          {error && <p className='text-red-600'>{error}</p>}
        </div>
      </div>
    </div>
  );
}


