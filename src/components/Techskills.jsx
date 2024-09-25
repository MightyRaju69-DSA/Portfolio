import { DiLinux } from 'react-icons/di'
import { DiTerminal } from 'react-icons/di'; 
import { FaNetworkWired } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import { SiKubernetes } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { animate, motion } from 'framer-motion'; // Importing framer-motion for animations

// Function to define animation variants for icons, receiving 'duration' as a parameter
const iconVariants = (duration) => ({
  initial: { y: -10 }, // Initial position for the icons (y-axis)
  animate: {
    y: [10, -10], // Animating between these values (y-axis)
    transition: {
      duration: duration, // Custom duration for each icon's animation
      ease: "linear",
      repeat: Infinity, // Infinite repetition
      repeatType: "reverse" // Reverses the animation on repeat
    }
  }
});

// Icon component for Bash
function BashIcon() {
  return (
    <div>
      <DiTerminal size={64} className='mx-2' />
      <p className='flex flex-wrap my-2 mb-0 items-center justify-center'>Bash</p>
    </div>
  );
}

// Icon component for Linux
function LinuxIcon() {
  return (
    <div>
      <DiLinux size={64} className='mx-2' />
      <p className='flex flex-wrap my-2 mb-0 items-center justify-center'>Linux</p>
    </div>
  );
}

// Icon component for Networking
function NetworkIcon() {
  return (
    <div>
      <FaNetworkWired size={64} className='mx-2' />
      <p className='flex flex-wrap my-2 mb-0 items-center justify-center'>Network</p>
    </div>
  );
}

// Icon component for Git
function GitIcon() {
  return (
    <div>
      <FaGitAlt size={64} className='mx-2' />
      <p className='flex flex-wrap my-2 mb-0 items-center justify-center'>Git</p>
    </div>
  );
}

// Icon component for Docker
function DockerIcon() {
  return (
    <div>
      <SiDocker size={64} className='mx-2' />
      <p className='flex flex-wrap my-2 mb-0 items-center justify-center'>Docker</p>
    </div>
  );
}

// Main Techskills component
const Techskills = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      
      {/* Heading with animation */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1 }} 
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>

      {/* Container for icons with animation */}
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 0.5 }} 
        className='flex flex-wrap items-center justify-center gap-4'
      >
        
        {/* Animated Linux Icon */}
        <motion.div 
          variants={iconVariants(2.5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <LinuxIcon />
        </motion.div>

        {/* Animated Network Icon */}
        <motion.div 
          variants={iconVariants(3)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <NetworkIcon />
        </motion.div>

        {/* Animated Bash Icon */}
        <motion.div 
          variants={iconVariants(5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BashIcon />
        </motion.div>

        {/* Animated Git Icon */}
        <motion.div 
          variants={iconVariants(4)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <GitIcon />
        </motion.div>

        {/* Animated Docker Icon */}
        <motion.div 
          variants={iconVariants(3.5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DockerIcon />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Techskills;
