import { Link } from "react-router-dom";
import { search, update } from "../services/BooksApi";
import { useState } from "react";
import Book from "./Book";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const searchBook = (event) => {
    search(event.target.value, 50).then((books) => {
      setBooks([...books]);
    });
  };

  const moveToShelf = (book, newShelf) => {
    if (book.shelf === newShelf) {
      return;
    }
    update(book, newShelf).then(() => {
      alert(`${book.title} is move to ${newShelf}`);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => searchBook(event)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} changeShelf={moveToShelf}></Book>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
