import "./styles.css";
import { Link } from "react-router-dom";
import { Book } from "types/book";

type Props = {
  book: Book;
}

function Bookcard( { book } : Props) {

  return (
    <div>
      <div className="urlibrary-book-card-top-container">
        <img
          className="urlibrary-book-card-image"
          src={book.image}
          alt={book.title}
        />
      </div>
      <div className="urlibrary-card-bottom-container">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <div className="urlibrary-card-bottom-container-plus">
          <h3>{book.year}⠀●⠀{book.pages_number} páginas</h3>
          <h4>{book.copies_number} cópias disponíveis</h4>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
