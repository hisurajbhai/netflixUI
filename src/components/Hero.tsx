import React from 'react';
import { Play, Info } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[90vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Stranger Things</h1>
          <p className="text-lg text-gray-200 mb-8">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
              <Play className="w-6 h-6" /> Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-500/90 transition">
              <Info className="w-6 h-6" /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}