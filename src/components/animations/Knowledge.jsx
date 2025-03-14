import {
  RiReactjsFill, 
  RiHtml5Fill, 
  RiCss3Fill, 
  RiJavascriptFill, 
  RiGithubFill, 
  RiTerminalBoxFill, 
  RiVuejsFill,
  RiTailwindCssFill,
  RiFigmaFill,
  RiPhpFill,} 
from '@remixicon/react';
import { motion } from "framer-motion";

const knowledgeList = [
  {
    id: 1,
    name: "React",
    percentage: 50,
    icon: <RiReactjsFill size={35} />,
    color: "from-blue-500 to-blue-400"
  },
  {
    id: 2,
    name: "HTML5",
    percentage: 86,
    icon: <RiHtml5Fill size={35} />,
    color: "from-orange-500 to-orange-400"
  },
  {
    id: 3,
    name: "CSS3",
    percentage: 94,
    icon: <RiCss3Fill size={35} />,
    color: "from-blue-500 to-blue-400"
  },
  {
    id: 4,
    name: "JavaScript",
    percentage: 86,
    icon: <RiJavascriptFill size={35} />,
    color: "from-yellow-500 to-yellow-400"
  },
  {
    id: 5,
    name: "Git/GitHub",
    percentage: 76,
    icon: <RiGithubFill size={35} />,
    color: "from-gray-500 to-gray-400"
  },
  {
    id: 6,
    name: "Node.js",
    percentage: 56,
    icon: <RiTerminalBoxFill size={35} />,
    color: "from-green-500 to-green-400"
  },
  {
    id: 7,
    name: "Vue.js",
    percentage: 87,
    icon: <RiVuejsFill size={35} />,
    color: "from-green-500 to-green-400"
  },
  {
    id: 8,
    name: "Tailwind",
    percentage: 80,
    icon: <RiTailwindCssFill size={35} />,
    color: "from-teal-500 to-teal-400"
  },
  {
    id: 9,
    name: "Figma",
    percentage: 66,
    icon: <RiFigmaFill size={35} />,
    color: "from-gray-500 to-gray-400"
  },
  {
    id: 10,
    name: "Php",
    percentage: 58,
    icon: <RiPhpFill size={35} />,
    color: "from-indigo-500 to-indigo-400"
  },
];

const Knowledge = () => {
  return(
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
            <div className="flex items-center mb-4 ">
              <div className="animate-pulse text-[#3F4F44]">
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
  );
};
export default Knowledge;