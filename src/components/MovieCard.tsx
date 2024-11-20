import React from 'react';
import { Play } from 'lucide-react';

interface MovieCardProps {
  imageUrl: string;
  alt: string;
}

export function MovieCard({ imageUrl, alt }: MovieCardProps) {
  return (
    <div className="aspect-video bg-gray-800 rounded-md overflow-hidden group cursor-pointer relative">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Play className="w-12 h-12 text-white" />
      </div>
    </div>
  );
}