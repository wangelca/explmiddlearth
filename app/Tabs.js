'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Tabs() {
  const [hovered, setHovered] = useState(null);

  const tabs = [
    { id: 1, href: '/characters', src: '/anduinriver.jpg', alt: 'Characters' },
    { id: 2, href: '/moviesbooks', src: '/minastirith.jpg', alt: 'Movies & Books' },
    { id: 3, href: '/quotes', src: '/sauroneye.jpg', alt: 'Quotes' },
    { id: 4, href: '/about', src: '/shire.jpg', alt: 'About' },
  ];

  return (
    <div className='flex flex-row gap-4'>
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          className='relative'
          onMouseEnter={() => setHovered(tab.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={tab.src}
            alt={tab.alt}
            className={`h-180 w-80 object-cover transition-all duration-300 ease-in-out ${
              hovered !== null && hovered !== tab.id ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              hovered !== null && hovered !== tab.id ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span
              className={`text-white text-xl font-bold rounded font-raleway`}
              style={{ textShadow: 'none' }}
            >
              {tab.alt}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}








