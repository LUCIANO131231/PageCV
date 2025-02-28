"use client"
import {motion} from 'framer-motion'
import PropTypes from 'prop-types';

const ZoomIn = ({ children, id = 1 }) => {
  const zoomInVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: id === 1 ? 0 : 0.1 * id
      }
    }
  };

  return (
    <motion.div
      variants={zoomInVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      className="w-full">
      {children}
    </motion.div>
  );
};

ZoomIn.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number
};

export default ZoomIn