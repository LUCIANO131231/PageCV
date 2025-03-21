import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RiCloseLine, RiMedal2Fill, RiCalendar2Fill } from '@remixicon/react';
import Confetti from '../animations/Confetti';
import { useEffect, useState } from 'react';

const CertificateModal = ({ certificate, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if(certificate) {
      setShowConfetti(true);
      //desactivar despues de 5 segundos
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
        
        {/* imagen del certificado responsivo */}
        <div className="md:w-3/5 bg-gray-100 md:min-h-full flex items-center justify-center p-4">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg" 
          />
        </div>
        
        {/* detalles del certificado responsivo */}
        <div className="md:w-2/5 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-glori font-bold">{certificate.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <RiCloseLine size={24} />
            </button>
          </div>
          
          <div className="space-y-4 flex-grow">
            <div className="flex items-center">
              <RiMedal2Fill className="text-yellow-500 mr-3" size={24} />
              <div>
                <span className="text-sm text-gray-500">Organización</span>
                <p className="font-medium">{certificate.organization}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <RiCalendar2Fill className="text-green-500 mr-3" size={24} />
              <div>
                <span className="text-sm text-gray-500">Fecha de emisión</span>
                <p className="font-medium">{certificate.date}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h3 className="font-medium mb-2">Acerca de este certificado</h3>
              <p className="text-gray-600 text-sm">
              Certificación obtenida en tras completar satisfactoriamente el programa formativo. 
              Este curso impartido por <span className='font-glori text-blue-700 font-bold'>{certificate.organization}</span> me permitió adquirir conocimientos especializados 
              y competencias profesionales en <span className='font-glori text-blue-700 font-bold'>{certificate.title}</span>.
              </p>
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