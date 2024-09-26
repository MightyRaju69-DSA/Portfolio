import aboutimage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'framer-motion';

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-gray-800 text-white shadow-md shadow-gray-900">
      {/* Main title animation, with exaggerated movement */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        initial={{ opacity: 0, y: -200, scale: 0.8 }} 
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} 
        className="my-20 text-center text-5xl lg:text-6xl font-bold tracking-wide uppercase transform transition-transform duration-300 hover:scale-105"
      >
        About 
        <motion.span 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 150 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} 
          className="text-neutral-500 hover:text-neutral-300 transition-colors duration-300 ml-2"
        >
          Me
        </motion.span>
      </motion.h1>

      {/* Container for the image and text with extra padding and margin */}
      <div className="flex flex-col lg:flex-row bg-neutral-700 rounded-lg shadow-lg p-6 lg:p-12 gap-8 lg:gap-12">
        
        {/* Left side - image with bloated animation */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
          initial={{ opacity: 0, x: -200, rotate: -15 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }} 
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
        >
          <img 
            className="rounded-3xl border-4 border-neutral-600 shadow-xl shadow-gray-900 w-full max-w-xs lg:max-w-lg transition-all duration-500 hover:brightness-110 hover:scale-105" 
            src={aboutimage} 
            alt="About Me" 
          />
        </motion.div>

        {/* Right side - text area with more motion effects */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 200 }} 
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.7 }} 
          className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center items-center lg:items-start transform transition-transform duration-500 hover:translate-x-2"
        >
          {/* Text block with extra padding, margin, and hover effects */}
          <div className="flex justify-center lg:justify-start w-full">
            <p className="my-4 max-w-md py-6 text-lg lg:text-xl font-serif text-neutral-300 leading-relaxed tracking-wide lg:tracking-normal hover:text-neutral-100 transition-all duration-300 hover:shadow-inner hover:shadow-gray-900">
              {ABOUT_TEXT}
            </p>
          </div>

          {/* Additional bloated button for interaction, with unnecessary animation */}
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#646cff", color: "#fff" }} 
            whileTap={{ scale: 0.9, backgroundColor: "#535bf2" }} 
            transition={{ duration: 0.3, ease: "easeInOut" }} 
            className="px-6 py-3 mt-4 bg-neutral-600 text-white rounded-lg shadow-md transition-transform duration-300 hover:bg-neutral-500 hover:scale-105"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
