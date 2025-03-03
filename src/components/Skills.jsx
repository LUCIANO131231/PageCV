import { useState } from "react";
import { motion } from "framer-motion";
import Title from "./ui/Title";
import Tabs from "./animations/Tabs";
import SoftSkills from "./animations/SoftSkills";
import Knowledge from "./animations/Knowledge";


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
              transition={{ duration: 0.8, ease: "easeOut" }}>
              skills <span className='letra text-white'>and</span> knowledge
            </motion.h1>
          </Title>
        </div>

        {/* pestañas para alternar entre ambos */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Sección de Conocimientos Técnicos */}
        {activeTab === "conocimientos" && <Knowledge />}

        {/* Sección de Aptitudes */}
        {activeTab === "aptitudes" && <SoftSkills />}
      </div>
    </section>
  );
};

export default Skills;