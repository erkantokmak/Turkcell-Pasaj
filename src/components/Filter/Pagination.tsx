import { PaginationButton, PaginationNumber, PaginationWrapper } from '@/styles/Category/Filter';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i: number = 1; i <= totalPages; i++) {
    pageNumbers.push(i.toString());
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
    <>
      <PaginationWrapper>
        <PaginationButton onClick={handlePrevClick} disabled={currentPage === 1}>
          {'<'}
        </PaginationButton>
        {pageNumbers && pageNumbers.length > 0 && pageNumbers.slice(0, 10).map((number) => (
          <PaginationNumber
            key={number}
            onClick={() => onPageChange(parseInt(number))}
            active={currentPage === parseInt(number)}
          >
            {number}
          </PaginationNumber>
        ))}
        {totalPages > 10 && <span>...</span>}
        <PaginationButton onClick={handleNextClick} disabled={currentPage === totalPages}>
          {'>'}
        </PaginationButton>
      </PaginationWrapper>
    </>
  );
};

export default Pagination;
