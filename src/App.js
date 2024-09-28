import "./App.css";
import SearchPage from "./components/SearchPage";
import BookShelf from "./components/BookShelf";
import { useEffect, useState } from "react";
import { getAll } from "./BooksApi";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);

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
      {showSearchPage ? (
        <SearchPage stateChanger={setShowSearchPage}></SearchPage>
      ) : (
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
            <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
