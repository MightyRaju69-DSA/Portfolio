import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: -100 }} 
      transition={{ duration: 1 }} 
      className="border-b border-neutral-900 pb-20"
    >
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
       <a href="" target="_blank"> <p className="my-4 underline">{CONTACT.medium}</p></a>
       <a href="" target="_blank" > <p className="my-4 underline">{CONTACT.linkedin}</p> </a>
       <a href="mailto:mightyraju6042069@@gmail.com" className="border-b">{CONTACT.email}</a>
      </div>
    </motion.div>
  );
};

export default Contact;
