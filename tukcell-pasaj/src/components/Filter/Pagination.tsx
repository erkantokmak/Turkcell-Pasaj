import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        {'<'}
      </button>
      {pageNumbers.slice(0, 10).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          // active={currentPage === number}
        >
          {number}
        </button>
      ))}
      {totalPages > 10 && <span>...</span>}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
