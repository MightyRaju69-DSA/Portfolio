import { Certifications } from '../constants';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mycertificate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="border-b border-neutral-900 pb-4 mx-4 lg:mx-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {Certifications.map((project, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col items-center">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={220}
                  className="mb-6 rounded-lg"
                  style={{ maxWidth: '100%', maxHeight: '100%', display: 'inline-block' }}
                />
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/2 lg:pl-4 mx-2 flex flex-col justify-center text-center"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h6 className="mb-2 font-semibold underline">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Mycertificate;
