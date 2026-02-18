import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RiCodeSSlashFill, RiMedal2Fill, RiCalendar2Fill } from '@remixicon/react';

const CertificateCard = ({ certificate, index, onClick }) => {
  return (
    <motion.div
      className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      layoutId={`certificate-${certificate.id}`}>

        <div className='relative group overflow-hidden cursor-pointer' onClick={() => onClick(certificate)}>
          {/* imagen de certificado */}
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* overlay: solo ícono animado */}
          <div className='absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <motion.div
              className='text-white'
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
              <RiCodeSSlashFill size={48} />
            </motion.div>
          </div>

          {/* badge de categoría */}
          <div className='absolute top-3 right-3'>
            <span className='bg-green-500 text-white text-xs px-3 py-1 rounded-full'>
              {certificate.category}
            </span>
          </div>
        </div>

        {/* info */}
        <div className='p-5'>
          <h3 className='font-glori font-semibold text-base mb-3 line-clamp-2 leading-snug'>{certificate.title}</h3>
          <div className='flex items-center justify-between text-sm text-gray-500'>
            <div className='flex items-center gap-1'>
              <RiMedal2Fill className='text-yellow-500' size={16} />
              <span className='truncate max-w-[140px]'>{certificate.organization}</span>
            </div>
            <div className='flex items-center gap-1 shrink-0'>
              <RiCalendar2Fill size={14} />
              <span>{certificate.date}</span>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

CertificateCard.propTypes = {
  certificate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CertificateCard