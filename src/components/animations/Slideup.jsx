import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const SlideUp = ({ children, id = 1 }) => {
  const slideLeftVariants = {
    offscreen: {
      y: 40,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: (id === 1 ? 0 : 0.1 * id)
      }
    }
  };

  return (
    <motion.div
      variants={slideLeftVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

// **Agregamos la validación de Props**
SlideUp.propTypes = {
  children: PropTypes.node.isRequired,  // `children` es obligatorio y debe ser un nodo de React
  id: PropTypes.number  // `id` debe ser un número
};

SlideUp.defaultProps = {
  id: 1
};

export default SlideUp;
