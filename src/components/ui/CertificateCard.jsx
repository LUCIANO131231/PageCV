import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RiMedal2Fill, RiCalendar2Fill } from '@remixicon/react';

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

          {/* overlay con efecto de gradiente */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
            <motion.span
              className='text-white text-sm'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}>
              Haz clic para ampliar
            </motion.span>
          </div>

          {/* badge de categoría */}
          <div className='absolute top-3 right-3'>
            <motion.span
              className='bg-green-500 texte-white text-xs px-3 py-1 rounded-full'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}>
              {certificate.category}
            </motion.span>
          </div>
        </div>

        <div className='p-5'>
          <h3 className='font-glori font-semibold text-lg mb-2'></h3>

          <div className='flex items-center mb-2'>
            <RiMedal2Fill className='text-yellow-500 mr-2' size={18} />
            <span className='text-gray-700 text-sm'>{certificate.organization}</span>
          </div>

          <div className='flex items-center text-gray-500 text-sm'>
            <RiCalendar2Fill className="mr-2" size={16} />
            <span>{certificate.date}</span>
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