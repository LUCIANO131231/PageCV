import { motion } from "framer-motion";
import PropTypes from 'prop-types';

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
        // type: "spring",
        // bounce: 0.4,
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
      viewport={{ once: true, amount: 0 }}>
      {children}
    </motion.div>
  );
};

SlideUp.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number
};

export default SlideUp;
