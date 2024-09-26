import logo from "../assets/kevinRushLogo.png"; // Import the logo image
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"; // Import the social media icons from react-icons

const Navbar = () => {
  return (
    <nav className="mb-8 lg:mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex items-center justify-center lg:justify-start">
        {/* The website's logo is displayed here */}
        <img className="h-16" src={logo} alt="logo" />
      </div>

      {/* Social Media Links Section */}
      <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        {/* Twitter link with the Twitter icon */}
        <a 
          href="https://x.com/Raju29022004?s=0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl mr-4 lg:mr-8 transition-transform duration-300 hover:scale-110"
        >
          <FaTwitter />
        </a>

        {/* Instagram link with the Instagram icon */}
        <a 
          href="https://www.instagram.com/yourusername/" // Add your Instagram URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl mr-4 lg:mr-8 transition-transform duration-300 hover:scale-110"
        >
          <FaInstagram />
        </a>

        {/* GitHub link with the GitHub icon */}
        <a 
          href="https://github.com/MightyRaju69-DSA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl mr-4 lg:mr-8 transition-transform duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>

        {/* LinkedIn link with the LinkedIn icon */}
        <a 
          href="https://www.linkedin.com/in/yourusername/" // Add your LinkedIn URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl mr-4 lg:mr-8 transition-transform duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* Facebook link with the Facebook icon */}
        <a 
          href="https://www.facebook.com/yourusername/" // Add your Facebook URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl mr-4 lg:mr-8 transition-transform duration-300 hover:scale-110"
        >
          <FaFacebook />
        </a>

        {/* YouTube link with the YouTube icon */}
        <a 
          href="https://www.youtube.com/c/yourchannelname/" // Add your YouTube URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl transition-transform duration-300 hover:scale-110"
        >
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;