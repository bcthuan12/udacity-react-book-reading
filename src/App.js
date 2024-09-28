import "./App.css";
import SearchPage from "./components/SearchPage";
import BookShelf from "./components/BookShelf";
import { useState } from "react";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
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
                type={'currentlyReading'}
              ></BookShelf>
              <BookShelf title={"Want to Read"} type={'wantToRead'}></BookShelf>
              <BookShelf title={"Read"} type={'read'}></BookShelf>
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
