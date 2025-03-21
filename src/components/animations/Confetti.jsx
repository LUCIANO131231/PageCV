import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// generador de colores
const colors = ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4', '#9370DB', '#00CED1'];

// creacion de partículas de confeti con propiedades aleatorias
const createConfettiParticles = (count = 50) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Posición horizontal inicial (0-100%)
    y: -20, // Posición vertical inicial (fuera de la pantalla hacia arriba)
    rotation: Math.random() * 360, // Rotación inicial aleatoria
    scale: Math.random() * 0.6 + 0.4, // Tamaño aleatorio (0.4-1)
    color: colors[Math.floor(Math.random() * colors.length)], // Color aleatorio del array
    delay: Math.random() * 2, // Retraso para efecto escalonado
    duration: Math.random() * 3 + 3, // Duración (entre 3-6 segundos)
    type: Math.random() > 0.5 ? 'circle' : 'rect', // Formas variadas
  }));
};

const Confetti = ({ isActive }) => {
  const [particles, setParticles] = useState([]);

  // crear partículas cuando el componente se activa
  useEffect(() => {
    if (isActive) {
      setParticles(createConfettiParticles(60));
      
      // limpiar partículas despues de 8 segundos
      const timer = setTimeout(() => {
        setParticles([]);
      }, 8000);
      
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [isActive]);
  
  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'circle' ? 'rounded-full' : ''}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            width: particle.type === 'circle' ? '12px' : '8px',
            height: particle.type === 'circle' ? '12px' : '16px',
            opacity: 0.8,
          }}
          initial={{ 
            y: -20, 
            x: `${particle.x}%`,
            rotate: 0,
            scale: particle.scale,
            opacity: 1
          }}
          animate={{ 
            y: '120vh', 
            x: `${particle.x + (Math.random() * 20 - 10)}%`,
            rotate: particle.rotation,
            opacity: [1, 1, 0],
            scale: [particle.scale, particle.scale * 0.8, particle.scale * 0.5]
          }}
          transition={{ 
            duration: particle.duration, 
            delay: particle.delay,
            ease: [0.1, 0.4, 0.9, 1]
          }}
        />
      ))}
    </div>
  );
};

// Add prop type validation
Confetti.propTypes = {
  isActive: PropTypes.bool.isRequired
};

// Add default props
Confetti.defaultProps = {
  isActive: false
};

export default Confetti;