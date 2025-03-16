import React from "react";

const BookCard = ({ title, authors, categories, imageUrl, description, rating, ratingsCount, infoLink }) => {
  return (
    <div className="relative cursor-pointer flex bg-white p-3 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-2xl hover:bg-cyan-200/10 hover:border-cyan-400/50">
      <a href={infoLink} target='_blank' rel='noopener noreferrer' className='absolute inset-0 z-10 cursor-pointer' aria-label={`view ${title}`}></a>

      <div className="w-2/5 aspect-[2/3] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="w-3/5 pl-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold bg-gradient-to-b from-[#05638B] to-[#55ADFC]/90 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-600 text-xs font-bold mt-1">By {authors}</p>
          <p className="text-gray-500 text-xs mt-4 mb-4 line-clamp-2">{description}</p>
          <span className="mt-2 inline-block bg-cyan-200 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
            {categories}
          </span>
        </div>

        <div className="mt-3 flex items-center">
          {rating > 0 ? (
            <>
              <span className="text-yellow-500 text-sm">
                {"⭐".repeat(Math.round(rating))}
              </span>
              <span className="text-gray-500 text-xs ml-2">({ratingsCount} ratings)</span>
            </>
          ) : (
            <span className="text-gray-400 text-xs">No ratings yet</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
