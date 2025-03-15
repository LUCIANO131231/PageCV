import PropTypes from 'prop-types';

const Lightbox = ({selectedImage, onClose}) => {
  if(!selectedImage) return null;

  return(
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" 
      onClick={onclose}>
      <span
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer select-none"
        onClick={onClose}>
        &times;
      </span>
      <img className="max-w-full max-h-full rounded-lg shadow-lg" src={selectedImage} alt="Lightbox" />
    </div>
  );
};

Lightbox.propTypes = {
  selectedImage: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default Lightbox;