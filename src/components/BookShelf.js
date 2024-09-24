import Book from "./Book.js";

const BookShelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li>
                <Book
                  image={book.image}
                  title={book.title}
                  author={book.author}
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
