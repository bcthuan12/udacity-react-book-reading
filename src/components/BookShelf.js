import Book from "./Book.js";
import { update } from "../services/BooksApi.js";

const BookShelf = ({ title, books, refreshOtherShelf }) => {
  const changeShelf = (book, newShelf) => {
    if (book.shelf === newShelf) {
      return;
    }
    update(book, newShelf).then(() => {
      refreshOtherShelf();
    });
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} changeShelf={changeShelf}></Book>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
