import React from "react";
import PropTypes from "prop-types";
//import { paginate } from "../../utils/paginate";
//total number of items
//items per page
//selected page
const Pagination = props => {
  const { totalNumber, itemsPerPage, selectedPage, onPageChange } = props;
  const length = Math.ceil(totalNumber / itemsPerPage);

  if (length === 1) return null;
  return (
    //array.from could be replaced with _.range
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {Array.from({ length }, (v, i) => i + 1).map(index => (
          <li
            className={"page-item " + (index === selectedPage ? "active" : "")}
            key={index}
          >
            <a className="page-link" onClick={() => onPageChange(index)}>
              {index}
              {index === selectedPage ? (
                <span className="sr-only">(current)</span>
              ) : (
                ""
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalNumber: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
