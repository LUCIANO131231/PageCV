import { useState } from "react";
import PropTypes from "prop-types";
import { RiGithubFill  } from "@remixicon/react";
import { motion } from "framer-motion";
import Title from "./ui/Title";
import Lightbox from "./ui/Lightbox";
import { projectsData } from "./utils/ProjectsData";

const categories = ["All", "Design", "Game", "Branding", "Marketing"];

const Project = () => {
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const filteredProjects =
    category === "All"
    ? projectsData
    : projectsData.filter((image) => image.category === category);

  return (
    <section id="project" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full text-center mb-8">
          <Title>
            <h2 className="text-[90px] letra font-slowin text-green-500">
              Proyectos Portfolio
            </h2>
          </Title>
        </div>

        {/*  navbar */}
        <div className="relative flex justify-center mb-8">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex bg-white shadow-2xl rounded-full px-5 py-3 space-x-4 overflow-x-auto">
            {categories.map((item) => (
              <motion.li
                key={item}
                onClick={() => setCategory(item)}
                className={`cursor-pointer font-glori px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  item === category
                  ? "bg-green-500"
                  : "bg-transparent hover:bg-gray-200"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* card de proyectos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(({ category, id, src, title, githubLink }) => (
            <Card
              key={id}
              category={category}
              title={title}
              src={src}
              githubLink={githubLink}
              openLightbox={openLightbox}
            />
          ))}
        </motion.div>
        <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
      </div>
    </section>
  );
};

export default Project;

/* tarjetas con animacion */
const Card = ({ category, title, src, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full">
      
      <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl relative">
        {/* imagen del proyecto */}
        <div className="relative group">
          <img src={src} alt="Project" className="object-contain rounded-t-xl" />

          {/* Overlay al pasar el mouse */}
          <div className="absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 transition">
              <RiGithubFill size={20} />
              Ver en GitHub
            </a>
          </div>
        </div>

        {/* Información del Proyecto */}
        <div className="p-5 text-center">
          <span className="text-gray-500 uppercase text-sm">{category}</span>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  openLightbox: PropTypes.func.isRequired,
  githubLink: PropTypes.string.isRequired,
};