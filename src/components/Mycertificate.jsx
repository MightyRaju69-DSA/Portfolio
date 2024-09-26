import { Certifications } from '../constants'; // Import the certification data from constants
import { motion } from 'framer-motion'; // Import framer-motion for animation
import Slider from 'react-slick'; // Import Slider component from react-slick for carousel functionality
import 'slick-carousel/slick/slick.css'; // Import slick-carousel default styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const Mycertificate = () => {
  // Configuration settings for the slider
  const settings = {
    dots: true, // Show navigation dots at the bottom of the slider
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed for slide change
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per swipe
    adaptiveHeight: true, // Adjust height based on the content of the current slide
  };

  return (
    <div className="border-b border-neutral-900 pb-4 mx-4 lg:mx-20">
      {/* Section title with animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Animate opacity and position when in view
        initial={{ opacity: 0, y: -100 }} // Initial state before animation
        transition={{ duration: 1 }} // Animation duration
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h2>

      {/* Container for the slider */}
      <div className="container mx-auto">
        <Slider {...settings}>
          {/* Iterate through Certifications array and render each certificate */}
          {Certifications.map((certification, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col items-center">
                {/* Certificate image with animation */}
                <motion.img
                  src={certification.image} // Image source from certifications data
                  alt={certification.title} // Alt text for the image
                  width={400}
                  height={220}
                  className="mb-6 rounded-lg" // Styling for image
                  style={{ maxWidth: '100%', maxHeight: '100%', display: 'inline-block' }} // Ensure responsiveness
                  whileInView={{ opacity: 1 }} // Image animation on scroll
                  initial={{ opacity: 0 }} // Initial opacity
                  transition={{ duration: 1 }} // Animation duration
                />
                {/* Certificate details and link */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }} // Slide in animation
                  initial={{ opacity: 0, x: 100 }} // Initial state
                  transition={{ duration: 1 }} // Animation duration
                  className="w-full lg:w-1/2 lg:pl-4 mx-2 flex flex-col justify-center text-center"
                >
                  <a href={certification.link} target="_blank" rel="noopener noreferrer">
                    <h6 className="mb-2 font-semibold underline">{certification.title}</h6>
                    <p className="mb-4 text-neutral-400">{certification.description}</p>
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mycertificate;
