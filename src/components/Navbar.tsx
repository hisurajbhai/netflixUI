import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
              <a href="#" className="text-white hover:text-gray-300">Movies</a>
              <a href="#" className="text-white hover:text-gray-300">New & Popular</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-white cursor-pointer" />
            <Bell className="w-6 h-6 text-white cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-8 h-8 rounded"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
              />
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}