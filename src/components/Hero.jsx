import React from "react";
import HeroCard from "./subcomponents/HeroCard";
import FloatingParticles from "./subcomponents/FloatingParticles";

const Hero = ({ books }) => {
  const featuredBook = books.slice(10, 20);

  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full px-6 sm:px-10 md:px-24 lg:px-36 py-10 md:py-12 bg-gradient-to-b from-[#D3F3FE] to-[#55ADFC]/10 rounded-3xl min-h-[80vh] overflow-hidden">
      
      <FloatingParticles />

      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <HeroCard books={featuredBook} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Explore Top <span className="bg-gradient-to-b from-[#05638B] to-[#55ADFC]/90 bg-clip-text text-transparent">Reads</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-lg md:max-w-xl lg:max-w-2xl">
          Discover highly-rated books and expand your knowledge.
        </p>

        <div className="mt-6 sm:mt-16">
          <button className="px-6 py-3 text-4xl font-semibold text-white bg-gradient-to-b from-[#246AA4] to-[#769EC2]/90 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <a href="#browser">
              Explore
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
