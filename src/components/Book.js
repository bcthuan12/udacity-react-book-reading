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
          {isOnShelf ? (
            <select
              onChangeCapture={(event) => changeShelf(book, event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          ) : (
            <select
              onChangeCapture={(event) => changeShelf(book, event.target.value)}
            >
              <option value="none" disabled>
                Add to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          )}
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
