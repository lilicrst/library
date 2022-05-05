import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import './styles.css'

function Pagination() {
  return (
    <div className="urlibrary-pagination-container">
      <div className="urlibrary-pagination-box">
        <button className="urlibrary-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="urlibrary-pagination-button" disabled={false}>
          <Arrow className="urlibrary-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
