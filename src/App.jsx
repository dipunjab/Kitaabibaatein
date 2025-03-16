import React, { useState, useEffect } from "react";
import BrowserBooks from "./components/BrowserBooks";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  const [searchQuery, setSearchQuery] = useState("best sellers");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}&maxResults=35&key=${import.meta.env.VITE_GOOGLEAPI}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        const mappedBooks =
          data.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title || "Untitled",
            authors: item.volumeInfo.authors?.join(", ") || "Unknown Author",
            categories: item.volumeInfo.categories?.join(", ") || "General",
            rating: item.volumeInfo.averageRating || 0,
            pageCount: item.volumeInfo.pageCount || "N/A",
            printType: item.volumeInfo.printType || "Unknown",
            ratingsCount: item.volumeInfo.ratingsCount || 0,
            imageUrl: item.volumeInfo.imageLinks?.thumbnail || "",
            description: item.volumeInfo.description || "",
            infoLink: item.volumeInfo.infoLink || "#",
          })) || [];

        setBooks(mappedBooks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  return (
    <>
      <Nav />
      <Hero books={books} loading={loading} />
      <BrowserBooks books={books} loading={loading} setSearchQuery={setSearchQuery} />
    </>
  );
}

export default App;
