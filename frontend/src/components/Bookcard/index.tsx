import "./styles.css";

function Bookcard() {
  const book = {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41-TNa2nXtL._SX339_BO1,204,203,200_.jpg",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    publication: 2018,
    copy: 20,
  };

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
          <h3>{book.publication}⠀●⠀{book.pages} páginas</h3>
          <h4>{book.copy} cópias disponíveis</h4>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
