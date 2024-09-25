import { DiLinux } from 'react-icons/di'
import { DiTerminal } from 'react-icons/di'; 
import { FaNetworkWired } from 'react-icons/fa';
import { SiPowershell } from 'react-icons/si';
import { SiPython } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';


const iconVariants = (duration) => (
    {
        initial: {y : -10},
        animate:{
            y:[10,-10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"

            }
        }
    }
)
function BashIcon() {
    return (
      <div>
        <DiTerminal size={64} className=' mx-2'/>
        <p className='flex flex-wrap  my-2 mb-0 items-center justify-center'>Bash</p>
      </div>
    );
  }

  function LinuxIcon() {
    return (
      <div>
        <DiLinux size={64} className=' mx-2' />
        <p className='flex flex-wrap  my-2 mb-0 items-center justify-center'>Linux</p>
      </div>
    );
  }
  function NetworkIcon() {
    return (
      <div>
        <FaNetworkWired size={64} className=' mx-2'/>
        <p className='flex flex-wrap  my-2 mb-0 items-center justify-center'> Network  </p>
      </div>
    );
  }
  
const Techskills = () => {
  return (
    <div className=' border-b border-neutral-900  pb-24'>
        <motion.h1 whileInView={ {opacity: 1 , y:0}} initial={{opacity: 0 , y: -100}} transition={{duration: 1}} className=' my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={ {opacity: 1 , x:0}} initial={{opacity: 0 , x: -100}} transition={{duration: 0.5}} className=' flex flex-wrap  items-center justify-center gap-4 '>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className=' rounded-2xl border-4 border-neutral-800 p-4 '>
                <LinuxIcon className=' text-7xl text-white-700'/>
            </motion.div>      
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className=' rounded-2xl border-4 border-neutral-800 p-4 '>
                <NetworkIcon className=' text-7xl text-white-400'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className=' rounded-2xl border-4 border-neutral-800 p-4 '>
                <BashIcon className=' text-7xl text-white-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Techskills
