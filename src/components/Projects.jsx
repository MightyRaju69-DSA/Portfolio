import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";  // Importing the slider component from the 'react-slick' library
import "slick-carousel/slick/slick.css";  // Importing the base CSS for the carousel
import "slick-carousel/slick/slick-theme.css";  // Importing the theme for the carousel

const settings = {
  dots: true,  // Show navigation dots below the slider
  infinite: true,  // Enable infinite scrolling
  speed: 500,  // Transition speed between slides
  slidesToShow: 1,  // Number of slides to show at once
  slidesToScroll: 1,  // Number of slides to scroll at a time
  adaptiveHeight: true,  // Adjust slider height based on content
  arrows: true,  // Show navigation arrows (prev/next)
  autoplay: false,  // Enable autoplay
  autoplaySpeed: 3000,  // Time between each slide change in autoplay mode
  pauseOnHover: true,  // Pause autoplay on hover
  centerMode: false,  // Center the active slide
  centerPadding: '0px',  // Padding around the centered slide
  lazyLoad: 'ondemand',  // Load images only when needed
  fade: false,  // Enable fade transition effect
  vertical: false,  // Display the slider vertically
  verticalSwiping: false,  // Enable vertical swiping
  rtl: false,  // Right-to-left mode
  swipeToSlide: true,  // Allow users to drag/swipe to change slides
  touchMove: true,  // Enable touch move
  touchThreshold: 5,  // Threshold for detecting touch events
  useCSS: true,  // Use CSS for slide positioning
  variableWidth: false,  // Enable variable slide widths
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div className="border-b border-neutral-900 pb-4 mx-4 lg:mx-20">
      {/* Title animation for the section */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}  // Animation when the title comes into view
        initial={{ opacity: 0, y: -100 }}  // Initial state of the title (hidden and shifted up)
        transition={{ duration: 1 }}  // Duration of the animation
        className="my-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Projects/Blogs
      </motion.h2>
      
      {/* Slider container for the projects */}
      <div className="container mx-auto">
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 px-4">
              
              {/* Image container */}
              <div className="w-full h-64 flex justify-center items-center">
                <motion.img
                  src={project.image}  // Project image from the 'PROJECTS' data
                  alt={project.title}  // Alt text for accessibility
                  className="max-w-full h-3/4 rounded "  // Styling for the image
                />
              </div>
              
              {/* Project title and description */}
              <div className="w-full lg:w-3/4 lg:pl-4 mx-auto mt-4 text-center justify-center lg:text-left">
                {/* Link to the project or blog */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h6 className="mb-2 font-semibold text-center text-white-600 underline">{project.title}</h6>
                </a>
                {/* Description of the project */}
                <p className="mb-4 text-center text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

export default Projects;
