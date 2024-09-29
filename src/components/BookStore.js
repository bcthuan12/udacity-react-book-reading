import BookShelf from "./BookShelf";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../services/BooksApi";

const BookStore = () => {
  const [read, setRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);

  useEffect(() => {
    getAll().then((bookApis) => {
      setRead(bookApis.filter((b) => b.shelf === "read"));
      setWantToRead(bookApis.filter((b) => b.shelf === "wantToRead"));
      setCurrentlyReading(
        bookApis.filter((b) => b.shelf === "currentlyReading")
      );
    });
  }, []);

  const refreshShelf = () => {
    getAll().then((bookApis) => {
      setRead([...bookApis.filter((b) => b.shelf === "read")]);
      setWantToRead([...bookApis.filter((b) => b.shelf === "wantToRead")]);
      setCurrentlyReading([
        ...bookApis.filter((b) => b.shelf === "currentlyReading"),
      ]);
    });
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title={"Currently Reading"}
              books={currentlyReading}
              refreshOtherShelf={refreshShelf}
            ></BookShelf>
            <BookShelf
              title={"Want to Read"}
              books={wantToRead}
              refreshOtherShelf={refreshShelf}
            ></BookShelf>
            <BookShelf
              title={"Read"}
              books={read}
              refreshOtherShelf={refreshShelf}
            ></BookShelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
