import { Link } from "react-router-dom";
import { getAll, search, update } from "../services/BooksApi";
import { useEffect, useState } from "react";
import Book from "./Book";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [booksOnShelf, setBooksOnShelf] = useState([]);

  useEffect(() => {
    getAll().then((bookApis) => {
      setBooksOnShelf([...bookApis]);
    });
  }, []);

  const isBookOnShelf = (book) => {
    const bookOnShelf = booksOnShelf.find((b) => b.id === book.id);
    if (bookOnShelf && !Object.hasOwn(book, 'shelf')) {
      book.shelf = bookOnShelf.shelf;
    }
    return bookOnShelf;
  };

  const searchBook = (event) => {
    search(event.target.value, 50).then((res) => {
      if (res && !res?.error) {
        setBooks([...res]);
      } else {
        setBooks([...[]]);
      }
    });
  };

  const moveToShelf = (book, newShelf) => {
    if (book.shelf === newShelf) {
      return;
    }
    update(book, newShelf).then(() => {
      getAll().then((bookApis) => {
        setBooksOnShelf([...bookApis]);
      });
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
                <Book
                  book={book}
                  changeShelf={moveToShelf}
                  isOnShelf={isBookOnShelf(book)}
                ></Book>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
