import axios from "axios";
import { useState, useEffect } from "react";
import Bookcard from "components/Bookcard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { BookPage } from "types/book";
import { moveEmitHelpers } from "typescript";

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<BookPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    first: true,
    number: 0,
    empty: true,
    numberOfElements: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/books?size=12&page=${pageNumber}&sort=title`)
      .then(response => {
        const data = response.data as BookPage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber : number) => {
    setPageNumber(newPageNumber);
  }

  return (
    <>
      <Pagination page ={page} onChange={handlePageChange} />

      <div className="container">
        <div className="row">
          {page.content.map(book => (
            <div key={book.id} className="col-sm-6 col-lg-4 col-x1-3 mb-3">
              <Bookcard book={book} />
            </div>
          )
          )}


        </div>
      </div>
    </>
  );
}

export default Listing;
