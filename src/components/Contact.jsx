import { CONTACT } from "../constants"; // Importing contact information from constants
import { motion } from "framer-motion"; // Importing motion for animations

const Contact = () => {
  return (
    // Wrapper for the contact section with an animation that fades in and slides from the top
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
      initial={{ opacity: 0, y: -100 }} // Initial state before animation (faded out and moved up)
      transition={{ duration: 1 }} // Animation duration of 1 second
      className="border-b border-neutral-900 pb-20" // Adds bottom border and padding
    >
      {/* Section title */}
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      {/* Contact links container */}
      <div className="text-center tracking-tighter">
        {/* Contact via Medium (currently placeholder link) */}
        <a href="" target="_blank" rel="noopener noreferrer">
          <p className="my-4 underline">{CONTACT.medium}</p>
        </a>

        {/* Contact via LinkedIn (currently placeholder link) */}
        <a href="" target="_blank" rel="noopener noreferrer">
          <p className="my-4 underline">{CONTACT.linkedin}</p>
        </a>

        {/* Contact via email */}
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
