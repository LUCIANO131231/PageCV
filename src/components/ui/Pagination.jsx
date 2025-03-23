import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  //logica para mostrar numero de paginas con elipsis
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      // Si hay 5 o menos paginas, muestra todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1); //incluir la primera pagina

      if(currentPage <= 3){
        pages.push(2,3,4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <motion.div
      className='flex justify-center items-center space-x-2 my-6'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>

        {/* boton anterior */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full
          ${currentPage === 1 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-green-100 cursor-pointer'}`}>
          <RiArrowLeftSLine size={24} />
        </button>

        {/* numero de pagina */}
        {getPageNumbers().map((page, index) => (
          <motion.button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`h-10 w-10 rounded-full flex items-center justify-center font-glori cursor-pointer
            ${currentPage === page
            ? 'bg-green-500 text-white font-medium'
            : page === '...'
            ? 'cursor-default'
            : 'bg-white hover:bg-gray-100'}`}
            whileHover={page !== '...' && currentPage !== page ? { scale: 1.1 } : {}}
            whileTap={page !== '...' && currentPage !== page ? { scale: 0.95 } : {}}>
            {page}
          </motion.button>
        ))}

        {/** boton siguiente */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full 
          ${currentPage === totalPages 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-green-100 cursor-pointer'}`}>
          <RiArrowRightSLine size={24} />
        </button>
    </motion.div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination