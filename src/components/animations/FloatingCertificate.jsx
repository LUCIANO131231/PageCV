import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiAwardFill } from '@remixicon/react';

const FloatingCertificate = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      // calcular la posición relativa del mouse en la ventana
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // calcular el desplazamiento basado en la posición del mouse
  const calcOffset = (pos, strength) => {
    // Convierte el rango 0-1 a -1 a 1
    return (pos - 0.5) * 2 * strength;
  };

  return (
    <div className="absolute -top-14 -right-10 w-48 h-48 md:w-64 md:h-64 z-0 pointer-events-none overflow-hidden">
      
      <motion.div
        className="absolute w-full h-full"
        animate={{
        x: calcOffset(mousePosition.x, -15),
        y: calcOffset(mousePosition.y, -15),
        rotate: calcOffset(mousePosition.x, 5)}}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}>

          <div className="relative w-full h-full">
            {/* certificado principal */}
            <motion.div
              className="absolute inset-0 bg-white rounded-xl shadow-2xl p-4 border-4 border-[#D98324] flex flex-col justify-between transform rotate-6"
              animate={{ 
                rotateZ: [6, 8, 6],
                y: [0, -5, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}>

              <div className="flex justify-between items-start">
                <div className="text-[#D98324] flex items-center">
                  <RiAwardFill size={20} className="mr-1" />
                  <span className="text-xs font-bold">CERTIFICADO</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-[#D98324] opacity-30"></div>
              </div>
              
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
              </div>
              
              <div className="mt-auto flex justify-end">
                <div className="w-16 h-6 bg-[#D98324]/20 rounded-md"></div>
              </div>
            </motion.div>
          
            {/* certificado de fondo */}
            <motion.div
              className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 border-4 border-green-500 flex flex-col justify-between transform -rotate-6 -translate-x-6 translate-y-6"
              animate={{ 
                rotateZ: [-6, -8, -6],
                y: [6, 10, 6] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}>
                
              <div className="flex justify-between items-start">
                <div className="text-green-500 flex items-center">
                  <RiAwardFill size={20} className="mr-1" />
                  <span className="text-xs font-bold">DIPLOMA</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500 opacity-30"></div>
              </div>
              
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
              </div>
              
              <div className="mt-auto flex justify-end">
                <div className="w-16 h-6 bg-green-500/20 rounded-md"></div>
              </div>
            </motion.div>
          </div>
      </motion.div>
    </div>
  );
};

export default FloatingCertificate;