import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { BookPage } from 'types/book';
import './styles.css'

type Props = {
  page: BookPage
  onChange: Function;
}

function Pagination({ page, onChange } : Props) {
  return (
    <div className="urlibrary-pagination-container">
      <div className="urlibrary-pagination-box">
        <button className="urlibrary-pagination-button" 
        disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="urlibrary-pagination-button" 
        disabled={page.last} onClick={() => onChange(page.number + 1)} >
          <Arrow className="urlibrary-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
