import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RiCloseLine, RiMedal2Fill, RiCalendar2Fill, RiPriceTag3Fill } from '@remixicon/react';
import Confetti from '../animations/Confetti';
import { useEffect, useState } from 'react';

const CertificateModal = ({ certificate, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (certificate) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [certificate]);

  if (!certificate) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>

      <Confetti isActive={showConfetti} />

      <motion.div
        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        layoutId={`certificate-${certificate.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}>

        {/* imagen */}
        <div className="md:w-3/5 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* detalles */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between">
          
          {/* header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-glori font-bold leading-snug pr-2">
              {certificate.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0">
              <RiCloseLine size={24} />
            </button>
          </div>

          {/* info */}
          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-3">
              <RiMedal2Fill className="text-yellow-500 shrink-0" size={22} />
              <div>
                <span className="text-xs text-gray-400">Organización</span>
                <p className="font-medium text-sm">{certificate.organization}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RiCalendar2Fill className="text-green-500 shrink-0" size={22} />
              <div>
                <span className="text-xs text-gray-400">Fecha de emisión</span>
                <p className="font-medium text-sm">{certificate.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RiPriceTag3Fill className="text-blue-400 shrink-0" size={22} />
              <div>
                <span className="text-xs text-gray-400">Categoría</span>
                <p className="font-medium text-sm">{certificate.category}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

CertificateModal.propTypes = {
  certificate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  onClose: PropTypes.func.isRequired
};

export default CertificateModal;