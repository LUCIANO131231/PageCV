import { RiBookLine, RiFolder6Fill, RiExpandLeftRightFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Title from "./ui/Title";
import { workExperience } from "../utils/WorkExperience";
import { educationExperience } from "../utils/EducationExperience";
import PropTypes from 'prop-types';

const Experience = () => {
  return (
    <section id="resumen" className="py-12">
      <div className="container mx-auto px-4">
        <div className="w-full text-center mb-12">
          <div>
            <Title>
              <h2 className="text-[90px] letra font-slowin text-green-500">Professional Resume</h2>
            </Title>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-glori">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <RiExpandLeftRightFill size={24} className="text-gray-400" />
              <h3 className="text-xl">Work Experience</h3>
            </div>
            <TimelineSection items={workExperience} type="work" />
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <RiExpandLeftRightFill size={24} className="text-gray-400" />
              <h3 className="text-xl">Education</h3>
            </div>
            <TimelineSection items={educationExperience} type="education" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = ({ items, type }) => {
  return (
    <div className="relative">
      {/* Línea vertical del timeline */}
      <div className="absolute left-6 top-0 w-[3px] h-full bg-gray-500 rounded-sm"></div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineCard 
            key={item.id} 
            item={item} 
            index={index} 
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineCard = ({ item, index, type }) => {
  const { institute, position, years } = item;
  
  const cardVariants = {
    offscreen: {
      x: type === "work" ? -50 : 50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  const circleVariants = {
    offscreen: {
      scale: 0,
      opacity: 0
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  const Icon = type === "work" ? RiFolder6Fill : RiBookLine;

  return (
    <div className="flex relative">
      {/* Círculo en la línea de tiempo */}
      <motion.div 
        className="absolute left-[26px] w-[10px] h-[10px] bg-gray-600 rounded-full transform -translate-x-1/2 z-10 animate-pulse"
        style={{ marginTop: "40px" }}
        variants={circleVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      />

      {/* Contenido del card */}
      <motion.div 
        className="ml-12 p-6 hover:rounded-4xl w-full hover:shadow-lg transition-shadow duration-300"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}>
        <div className="flex items-start">
          <div className="w-10 h-10 flex items-center justify-center bg-[#D7D3BF] rounded-full mr-4">
            <Icon size={20} className="text-gray-400" />
          </div>

          <div>
            <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">{years}</span>
            <h4 className="text-lg font-semibold text-gray-800 mt-2">{institute}</h4>
            <span className="text-gray-600 block mt-1">{position}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

TimelineSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      years: PropTypes.string.isRequired,
      institute: PropTypes.string.isRequired,
      position: PropTypes.string,
    })
  ).isRequired,
  type: PropTypes.string.isRequired
};

TimelineCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    years: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    position: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Experience;