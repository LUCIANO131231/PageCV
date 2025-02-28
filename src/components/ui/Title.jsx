import SlideUp from '../animations/Slideup'
import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <SlideUp>
      <div className="text-center mb-8">
        {children}
      </div>
    </SlideUp>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title