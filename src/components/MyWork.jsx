import React from 'react';
import PremiumGallery from '../components/MyWorkGallery';
import ScrollAnimation from './ScrollAnimation';

export default function MyWork() {
  return (
    <div className="container mx-auto w-[90%] max-w-7xl py-16 space-y-12" id="work">
      
      {/* Dynamic Header Section with Auto-Scaling Responsive Typographic Deck */}
      <h2 className="flex items-center justify-center font-black relative select-none w-full min-h-[5rem] sm:min-h-[7rem] md:min-h-[8rem]">
        {/* Background Accent scaled down for mobile screens to eliminate collision overlaps */}
        <span className="text-5xl sm:text-7xl md:text-8xl opacity-[0.03] tracking-widest text-white uppercase leading-none whitespace-nowrap">
          Portfolio
        </span>
        <ScrollAnimation>
          <span className="absolute bg-transparent text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-widest z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase">
            MY WORK
          </span>
        </ScrollAnimation>
      </h2>

      {/* Main Grid View Component */}
      <PremiumGallery />
    </div>
  );
}