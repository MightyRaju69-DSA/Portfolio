import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, delay: delay },
  }
});

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, delay: 0.5 }, // Adjust the delay as needed
  },
};

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false }); // Set triggerOnce to false

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        <div className="w-full lg:w-1/2">
          <motion.div variants={container(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 lg:pb-8 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center lg:text-left" ref={ref}>
              <motion.span variants={slideIn} animate={inView ? "visible" : "hidden"}>Raju Mighty</motion.span> {/* Add animate prop to run animation on visibility */}
            </h1>
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag="x" dragConstraints={{ left: -100, right: 100 }} variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left">SOC ANALYST</motion.span>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
