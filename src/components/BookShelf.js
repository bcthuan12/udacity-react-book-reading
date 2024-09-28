import { useEffect, useState } from "react";
import Book from "./Book.js";
import {getAll} from "../BooksApi.js"

const BookShelf = ({ title, type }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll()
    .then(bookApis => {
      console.log(bookApis);
      setBooks(bookApis.filter(b => b.shelf === type));
    })
  }, []);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                ></Book>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
