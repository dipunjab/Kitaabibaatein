import React, { useState } from "react";
import BookCard from "./subcomponents/BookCard";
import { Search } from "lucide-react";

const BrowserBooks = ({ books, loading, setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 6;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginatedBooks = books.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="browser">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center md:text-left">
          Browse Our{" "}
          <span className="bg-gradient-to-t from-blue-900/60 to-blue-400 bg-clip-text text-transparent">
            Collection
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="relative mt-4 md:mt-0 w-full sm:w-80 md:w-96">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-900/90 pr-10"
          />
          <Search
            className="absolute right-3 top-2.5 text-cyan-900 w-5 h-5 cursor-pointer"
            onClick={handleSubmit}
          />
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
        {loading ? (
          <p className="text-gray-600 text-center col-span-full">Loading...</p>
        ) : paginatedBooks.length > 0 ? (
          paginatedBooks.map((book, index) => <BookCard key={index} {...book} />)
        ) : (
          <p className="text-gray-600 text-center col-span-full">No books found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gradient-to-b from-[#246AA4] to-[#769EC2]/90 cursor-pointer text-white rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="hidden sm:flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-gradient-to-b from-[#246AA4] to-[#769EC2]/90 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 cursor-pointer bg-gradient-to-b from-[#246AA4] to-[#769EC2]/90 text-white rounded-lg disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowserBooks;
