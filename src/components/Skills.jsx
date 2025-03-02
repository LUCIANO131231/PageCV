import { useState } from "react";
import { motion } from "framer-motion";
import { 
  RiTeamFill, RiLightbulbFill, RiTimeFill,
  RiReactjsFill, RiHtml5Fill, RiCss3Fill, 
  RiJavascriptFill, RiGithubFill, RiTerminalBoxFill 
} from '@remixicon/react';
import Title from "./ui/Title";
import Tabs from "./animations/Tabs";

// Datos de aptitudes (soft skills)
const aptitudes = [
  {
    id: 1,
    name: "Trabajo en equipo",
    level: 90,
    icon: <RiTeamFill size={40} />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Liderazgo",
    level: 85,
    icon: <RiLightbulbFill size={40} />,
    color: "bg-purple-500"
  },
  {
    id: 3,
    name: "Gestión del tiempo",
    level: 80,
    icon: <RiTimeFill size={40} />,
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Resolución de problemas",
    level: 95,
    icon: <RiLightbulbFill size={40} />,
    color: "bg-yellow-500"
  },
  {
    id: 5,
    name: "Comunicación",
    level: 88,
    icon: <RiTeamFill size={40} />,
    color: "bg-red-500"
  },
  {
    id: 6,
    name: "Adaptabilidad",
    level: 92,
    icon: <RiTimeFill size={40} />,
    color: "bg-indigo-500"
  }
];

// Datos de conocimientos técnicos (hard skills)
const conocimientos = [
  {
    id: 1,
    name: "React",
    percentage: 90,
    icon: <RiReactjsFill size={32} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    name: "HTML5",
    percentage: 95,
    icon: <RiHtml5Fill size={32} />,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 3,
    name: "CSS3",
    percentage: 85,
    icon: <RiCss3Fill size={32} />,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 4,
    name: "JavaScript",
    percentage: 88,
    icon: <RiJavascriptFill size={32} />,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 5,
    name: "Git/GitHub",
    percentage: 80,
    icon: <RiGithubFill size={32} />,
    color: "from-gray-700 to-gray-900"
  },
  {
    id: 6,
    name: "Node.js",
    percentage: 75,
    icon: <RiTerminalBoxFill size={32} />,
    color: "from-green-500 to-green-700"
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("conocimientos");

  return (
    <section id="skill" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Title>
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl letra font-slowin text-green-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              skills <span className='letra text-gray-800'>and</span> knowledge
            </motion.h1>
          </Title>
        </div>

        {/* pestañas para alternar entre ambos */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Sección de Conocimientos Técnicos */}
        {activeTab === "conocimientos" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key="conocimientos">
            {conocimientos.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", 
                  transition: { duration: 0.2 }}}
                className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white`}>
                      {skill.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-glori font-medium">{skill.name}</h3>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2 font-glori">
                      <div className="text-sm">Nivel de dominio</div>
                      <div className="text-sm">{skill.percentage}%</div>
                    </div>
                    <div className="h-2 rounded-full">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Sección de Aptitudes */}
        {activeTab === "aptitudes" && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key="aptitudes"
          >
            {aptitudes.map((aptitud, index) => (
              <motion.div
                key={aptitud.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">{aptitud.name}</h3>
                    <div className="text-2xl font-bold">{aptitud.level}<span className="text-sm">%</span></div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -m-6">
                    <motion.div 
                      className={`w-32 h-32 rounded-full opacity-10 ${aptitud.color}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => {
                        const filled = Math.floor(aptitud.level / 20) > i;
                        const halfFilled = Math.floor(aptitud.level / 20) === i && aptitud.level % 20 > 0;
                        
                        return (
                          <motion.div 
                            key={i}
                            className={`h-2 flex-1 rounded-full ${filled ? aptitud.color : 'bg-gray-200'}`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) + (i * 0.1) }}
                          >
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
                      className={`w-10 h-10 rounded-full ${aptitud.color} flex items-center justify-center text-white`}
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {aptitud.icon}
                    </motion.div>
                    <motion.div 
                      className="ml-3 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    >
                      {aptitud.level >= 90 ? "Experto" : 
                       aptitud.level >= 75 ? "Avanzado" : 
                       aptitud.level >= 60 ? "Intermedio" : "Básico"}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;