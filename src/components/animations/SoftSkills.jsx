import {RiGroupFill, RiChat3Fill, RiRepeatFill, RiLightbulbLine, RiFolderAddFill ,RiBookOpenFill} from '@remixicon/react';
import { motion } from "framer-motion";

const softSkillsList = [
  {
    id: 1,
    name: "Trabajo en equipo",
    level: 95,
    icon: <RiGroupFill size={35} />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Comunicación efectiva",
    level: 95,
    icon: <RiChat3Fill size={35} />,
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Adaptabilidad y flexibilidad",
    level: 84,
    icon: <RiRepeatFill size={35} />,
    color: "bg-blue-500"
  },
  {
    id: 4,
    name: "Resolución de problemas",
    level: 86,
    icon: <RiLightbulbLine size={35} />,
    color: "bg-blue-500"
  },
  {
    id: 5,
    name: "Gestión de proyectos",
    level: 70,
    icon: <RiFolderAddFill size={35} />,
    color: "bg-blue-500"
  },
  {
    id: 6,
    name: "Aprendizaje continuo",
    level: 92,
    icon: <RiBookOpenFill size={35} />,
    color: "bg-blue-500"
  }
];

const SoftSkills = () => {
  return(
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key="aptitudes">
      {softSkillsList.map((aptitud, index) => (
        <motion.div
          key={aptitud.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="bg-white rounded-xl shadow-2xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between font-glori font-medium mb-6">
              <h3 className="text-lg">{aptitud.name}</h3>
              <div className="text-lg font-bold">{aptitud.level}<span className="text-md">%</span></div>
            </div>
            
            <div className="absolute -top-14 -right-12 -m-6">
              <motion.div 
                className={`w-32 h-32 rounded-full opacity-30 bg-[#3B6790]`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </div>
            
            <div className="relative pt-3">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => {
                  const filled = Math.floor(aptitud.level / 20) > i;
                  const halfFilled = Math.floor(aptitud.level / 20) === i && aptitud.level % 20 > 0;
                  
                  return (
                    <motion.div 
                      key={i}
                      className={`h-1 flex-1 rounded-full ${filled ? aptitud.color : 'bg-gray-200'}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) + (i * 0.1) }}>
                      {halfFilled && (
                        <motion.div 
                          className={`h-full ${aptitud.color} rounded-full`} 
                          initial={{ width: "0%" }}
                          animate={{ width: `${(aptitud.level % 20) * 5}%` }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) + (i * 0.1) }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <motion.div 
                className="text-[#27445D]"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}>
                {aptitud.icon}
              </motion.div>
              <motion.div 
                className="ml-3 text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}>
                {aptitud.level >= 90 ? "Experto" : 
                  aptitud.level >= 75 ? "Avanzado" : 
                  aptitud.level >= 60 ? "Intermedio" : "Básico"}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default SoftSkills;