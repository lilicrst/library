import Bookcard from "components/Bookcard";
import Pagination from "components/Pagination";

function Listing() {
  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <Bookcard></Bookcard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
