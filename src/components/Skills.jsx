import { useState } from "react";
import { motion } from "framer-motion";
import Title from "./ui/Title";
import Tabs from "./animations/Tabs";
import softSkillsList from "./animations/SoftSkills";
import knowledgeList from "./animations/Knowledge";


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
            {knowledgeList.map((skill, index) => (
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
            {softSkillsList.map((aptitud, index) => (
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