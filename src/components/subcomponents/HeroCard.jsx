import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCard = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!books || books.length === 0) return null; 

  const totalBooks = books.length;
  const currentBook = books[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBooks);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalBooks) % totalBooks);
  };

  return (
    <div className="z-10 relative bg-gradient-to-bl from-[#9DE6FB] to-[#B2DAFB] w-64 min-h-[450px] sm:mx-4 rounded-2xl border border-cyan-300 shadow-lg backdrop-blur-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-cyan-400 flex flex-col items-center justify-between p-3">
          <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-lg rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-white group cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700 group-hover:text-gray-900" />
      </button>

      <div className="w-[200px] h-[300px] flex justify-center items-center">
        <img 
          src={currentBook.imageUrl} 
          alt={currentBook.title} 
          className="w-full h-full object-cover rounded-xl transition-all duration-300"
        />
      </div>

      <div className="text-center flex flex-col items-center">
        <h1 className="mt-2 text-lg font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
          {currentBook.title}
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          <span className="font-medium">Author: </span>
          <span className="text-gray-800">{currentBook.authors}</span>
        </p>
        
        <p className="mt-1 text-sm text-gray-600">
          <span className="font-medium">Rating:</span>
          <span className="text-yellow-500 font-semibold ml-1">⭐ {currentBook.rating || "N/A"}</span>
        </p>
      </div>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-lg rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-white group cursor-pointer"
      >
        <ChevronRight className="h-5 w-5 text-gray-700 group-hover:text-gray-900" />
      </button>

    </div>
  );
};

export default HeroCard;
