import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiSearchLine, RiFilterLine, RiAwardFill } from '@remixicon/react';
import { certificatesData, certificateCategories } from './utils/CertificatesData';
import Title from './ui/Title';
import CertificateCard from './ui/CertificateCard';
import CertificateModal from './ui/CertificateModal';
import Pagination from './ui/Pagination';
// import FloatingCertificate from './animations/FloatingCertificate';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCertificates, setFilteredCertificates] = useState([]);

  const itemsPerPage = 6;

  //filtrar por categoria y busqueda
  useEffect(() => {
    let filtered = certificatesData;

    //filtrar por categoria
    if(selectedCategory !== 'Todos') {
      filtered = filtered.filter(cert => cert.category === selectedCategory);
    }

    //filtrar por busqueda
    if(searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(term) ||
        cert.organization.toLowerCase().includes(term)
      );
    }

    setFilteredCertificates(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  //obtener certificados
  const getCurrentCertificates = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCertificates.slice(startIndex, startIndex + itemsPerPage);
  }

  //calcular numeros de paginas
  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

  // manejar cambio de pagina
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll suave hacia la parte superior de la sección
    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
  };

  // abrir modal de certificado
  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  // cerrar modal de certificado
  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificate" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* titulo de la seccion */}
        <div className="w-full text-center mb-8 relative">
          {/* <FloatingCertificate /> */}
          <Title>
            <h2 className="text-[90px] letra font-slowin text-green-500">
              Mis Certificados
            </h2>
            <p className="text-lg text-gray-600 font-glori mt-4 max-w-3xl mx-auto">
              Logros académicos y profesionales que reflejan mi compromiso con el aprendizaje continuo
              y el desarrollo de habilidades en diversas áreas.
            </p>
          </Title>
        </div>
        
        {/* barra de busqueda y filtros */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Barra de búsqueda */}
            <motion.div 
              className="relative flex-grow w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-gray-700" size={20} />
              </div>
              <input
                type="text"
                placeholder="Buscar certificados..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-700 rounded-2xl focus:outline-none focus:border-gray-700 focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            
            {/* boton de filtro */}
            <motion.button
              className="md:hidden flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}>              
              <RiFilterLine size={20} className="text-gray-600" />
              <span className="ml-2 text-gray-600">Filtrar</span>
            </motion.button>
            
            {/* categorias de filtro */}
            <motion.div 
              className="hidden md:flex items-center gap-2 flex-wrap"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              {certificateCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer 
                  ${selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
          
          {/* filtro desplegable */}
          <AnimatePresence>
            {showFilters && 
            (
              <motion.div 
                className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-md"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                  {certificateCategories.map((category) => 
                  (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700'}`}>
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* contador */}
        <div className="flex items-center justify-center mb-8">
          <motion.div 
            className="bg-white px-6 py-3 rounded-full shadow-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <RiAwardFill size={20} className="text-yellow-500 mr-2" />
            <span className="font-glori text-gray-700">
              Mostrando {filteredCertificates.length} de {certificatesData.length} certificados
            </span>
          </motion.div>
        </div>
        
        {/* grid */}
        {filteredCertificates.length > 0 ? 
        (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentCertificates().map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onClick={openCertificateModal}
              />
            ))}
          </div>
        ) 
          : 
        (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-glori mb-2">No se encontraron certificados</h3>
            <p className="text-gray-600">Intenta cambiar los filtros de búsqueda</p>
          </motion.div>
        )}
        
        {/* paginacion */}
        {filteredCertificates.length > itemsPerPage && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
        
        {/* modal */}
        <AnimatePresence>
          {selectedCertificate && 
          (
            <CertificateModal 
              certificate={selectedCertificate} 
              onClose={closeCertificateModal} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates