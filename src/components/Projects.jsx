import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="border-b border-neutral-900 pb-4 mx-4 lg:mx-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1 }} 
        className="my-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Projects/Blogs
      </motion.h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 px-4">
              <div className="w-full h-64 flex justify-center items-center">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full h-3/4 rounded "
                />
              </div>
              <div className="w-full lg:w-3/4 lg:pl-4 mx-auto mt-4 text-center justify-center  lg:text-left">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h6 className="mb-2 font-semibold  text-center text-white-600 underline">{project.title}</h6>
                </a>
                <p className="mb-4 text-center text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
