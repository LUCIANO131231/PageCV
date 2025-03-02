import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-10">
      <motion.div 
        className="bg-white p-2 rounded-full shadow-2xl inline-flex"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        {["conocimientos", "aptitudes"].map(tab => 
        (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full ml-2 text-md font-glori transition-all duration-300 
            ${activeTab === tab 
            ? "bg-[#FFB433]" 
            : "bg-transparent hover:bg-gray-200"}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

// validando props
Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};

export default Tabs;