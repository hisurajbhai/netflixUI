import React from 'react';
import { MovieCard } from './MovieCard';

interface MovieRowProps {
  title: string;
}

export function MovieRow({ title }: MovieRowProps) {
  const movieImages = [
    '1626814026160-2237a95fc5a0',
    '1535016120720-40c646be5580',
    '1535223289827-42d1f1ee9571',
    '1535268244506-15c78c54f247',
    '1535309788674-7d3a71c9f159',
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movieImages.map((imageId, index) => (
            <MovieCard
              key={index}
              imageUrl={`https://images.unsplash.com/photo-${imageId}?w=400&h=225&fit=crop`}
              alt={`Movie ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}