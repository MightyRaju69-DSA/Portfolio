import aboutimage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'framer-motion';

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1 }} 
        className="my-20 text-center text-4xl"
      >
        About 
        <motion.span 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 100 }} 
          transition={{ duration: 1 }} 
          className="text-neutral-500"
        >
          Me
        </motion.span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }} 
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img 
            className="rounded-2xl w-full max-w-xs lg:max-w-full" 
            src={aboutimage} 
            alt="about" 
          />
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.5 }} 
          className="w-full lg:w-1/2 lg:pl-8"
        >
          <div className="flex justify-center lg:justify-center ">
            <p className="my-2 max-w-md py-6  font-serif items-center">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
