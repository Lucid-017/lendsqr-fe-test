import React, { useState } from 'react';
import '../styles/pagination.scss'

const Pagination = ({ totalItems, itemsPerPage, pageLimit }:any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageCount, setItemsPerPageCount] = useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPageCount);
  const startCount = (currentPage - 1) * itemsPerPageCount + 1;
  const endCount = Math.min(currentPage * itemsPerPageCount, totalItems);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNum:number) => {
    setCurrentPage(pageNum);
  };

  const handleItemsPerPageChange = (e:any) => {
    setItemsPerPageCount(parseInt(e.target.value));
    setCurrentPage(1); // Reset to page 1 when per page count changes
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        if(i<=3){
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagenum ${i === currentPage ? 'active' : ''}`}>
          {i}
        </button>)
      }
      }
    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>Showing</span>
        <select className='showing' value={itemsPerPageCount} onChange={handleItemsPerPageChange}>
          {/* <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option> */}
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
        <span>out of {totalItems}</span>
      </div>
      
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          &lt;
        </button>
        {renderPageNumbers()}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;