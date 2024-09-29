const Book = ({ book, changeShelf, isOnShelf }) => {
  const getCover = (book) => {
    return book?.imageLinks?.thumbnail
      ? book?.imageLinks?.thumbnail
      : "No image";
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${getCover(book)})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChangeCapture={(event) => changeShelf(book, event.target.value)}
          >
            <option value="none" disabled>
              {isOnShelf ? "Move to..." : "Add to..."}
            </option>
            <option
              value="currentlyReading"
              selected={book.shelf === "currentlyReading"}
            >
              Currently Reading
            </option>
            <option value="wantToRead" selected={book.shelf === "wantToRead"}>
              Want to Read
            </option>
            <option value="read" selected={book.shelf === "read"}>
              Read
            </option>
            {isOnShelf ? <option value="none">None</option> : ""}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(",") : ""}
      </div>
    </div>
  );
};

export default Book;
