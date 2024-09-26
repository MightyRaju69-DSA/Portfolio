import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-8 lg:mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
      <div className="flex items-center justify-center lg:justify-start">
        <img className="h-16" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
      <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 lg:mr-8"><FaTelegram /></a> 
        <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 lg:mr-8"><FaLinkedin /></a>
        <a href="https://x.com/Raju29022004?s=0" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 lg:mr-8"><FaTwitter /></a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 lg:mr-8"><FaInstagram /></a>
        <a href="https://github.com/MightyRaju69-DSA" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaGithub /></a> 
      </div>
    </nav>
  );
};

export default Navbar;
