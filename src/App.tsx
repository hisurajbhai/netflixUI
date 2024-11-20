import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      {['Trending Now', 'Popular on Netflix', 'New Releases'].map((category) => (
        <MovieRow key={category} title={category} />
      ))}
    </div>
  );
}

export default App;