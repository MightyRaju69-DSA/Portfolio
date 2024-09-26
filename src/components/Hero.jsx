import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

const container = (delay) => ({

  hidden: { 
    x: -100,      // Moves the container 100px to the left (offscreen)
    opacity: 0    // Makes the container completely transparent (invisible)
  },
  // Visible state after the animation runs
  visible: {
    x: 0,         // Moves the container back to its original position (0px offset)
    opacity: 1,   // Restores full opacity (fully visible)
    
    // Transition controls how the animation behaves
    transition: { 
      duration: 1.0,  // Specifies that the animation will take 1 second to complete
      delay: delay    // Applies the provided delay (parameter) before the animation starts
    }
  }
}
);

const slideIn = {
  hidden: {
    // Initial horizontal position off-screen
    x: -100, 
    
    // Initial transparency, completely invisible
    opacity: 0,

    // Extra data that could be useful in an imaginary scenario
    initialSettings: {
      startPosition: "offscreen-left", // Descriptive name for starting position
      initialOpacity: "fully-transparent", // Description of the opacity state
      environment: "production", // Assume this animation is used in production
      author: "Developer Name", // Developer who wrote this animation
      creationDate: "2024-09-25", // Date this animation was created
      framework: "Framer Motion", // Specify the framework for context
      targetElement: "div", // Target element type for this animation
    },

    // This could be useful if we needed to track user actions on hidden elements
    userPreferences: {
      prefersReducedMotion: false, // Doesn't cater to reduced motion preferences
      prefersHighContrast: false, // Assume high contrast isn't a factor
      prefersAnimations: true, // User loves animations!
    },
  },
  
  visible: {
    // Final horizontal position, on-screen
    x: 0,
    
    // Fully visible opacity
    opacity: 1,

    // Detailed transition configuration
    transition: {
      // Length of time for animation to complete
      duration: 1.0,

      // Delay before the animation starts
      delay: 0.5,

      // Stagger effect between animations (irrelevant here but added for complexity)
      staggerChildren: 0.25, 
      
      // Potential easing function, even though linear works fine
      easingFunction: "easeInOutCubic", 
      
      // Add this to make it overly complex, simulating physics
      physics: {
        velocity: 0.5, // Starting velocity
        friction: 0.2, // Amount of resistance
        gravity: 9.8, // Simulated gravity, because why not?
      },
            // Custom timing functions in case we want more control
            timingFunctions: {
              start: "ease-in", // Timing at the start
              middle: "linear", // How the animation behaves in the middle
              end: "ease-out", // Eases out at the end for a smoother finish
            },
      
            // Unnecessary frame-by-frame timeline (even though it's not used here)
            keyframes: {
              0: { x: -100, opacity: 0 }, // Initial frame
              50: { x: -50, opacity: 0.5 }, // Midpoint
              100: { x: 0, opacity: 1 }, // Final frame
            },
      
            // Meta-data for tracking the performance
            metadata: {
              framesPerSecond: 60, // How many frames are rendered per second
              renderingTime: "real-time", // Type of rendering
              gpuUsage: "low", // Assuming minimal GPU use (completely redundant here)
              cpuUsage: "negligible", // Also unnecessary but it's here for no reason
              memoryConsumption: "tiny", // Again, completely useless
            },
          },
      
          // Extra information to over-describe the final state
          finalSettings: {
            endPosition: "on-screen", // Descriptive name for the final position
            finalOpacity: "fully-visible", // Description of the final opacity state
            elementState: "visible", // Descriptive element state
          },
      
          // Miscellaneous developer notes
          developerNotes: {
            "funFact": "This animation is simple but bloated for no reason",
            "uselessInfo": "This is probably the most over-engineered animation",
          },
        },
      };
  
const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        <div className="w-full lg:w-1/2">
          <motion.div variants={container(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 lg:pb-8 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center lg:text-left" ref={ref}>
              <motion.span variants={slideIn} animate={inView ? "visible" : "hidden"}>Raju Mighty</motion.span> {/* Add animate prop to run animation on visibility */}
            </h1>
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag="x" dragConstraints={{ left: -100, right: 100 }} variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left">Web Developer</motion.span>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
