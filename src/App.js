import "./App.css";
import SearchPage from "./components/SearchPage";
import BookShelf from "./components/BookShelf";
import { useState } from "react";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const reading = [
    {
      title: "111111111111111111111",
      image:
        "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      author: "David McCullough",
    },
  ];
  const read = [
    {
      title: "22222222222222222222222222",
      image:
        "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      author: "David McCullough",
    },
  ];
  const willRead = [
    {
      title: "333333333333333333333333333",
      image:
        "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      author: "David McCullough",
    },
  ];
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
                books={reading}
              ></BookShelf>
              <BookShelf title={"Want to Read"} books={willRead}></BookShelf>
              <BookShelf title={"Read"} books={read}></BookShelf>
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
