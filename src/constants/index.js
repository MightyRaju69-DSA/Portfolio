import project1 from "../assets/projects/project-1.jpg";

import googlecert from "../assets/projects/New-Google-Logo-497x500.webp"
import { FaLinkedin } from "react-icons/fa"
import defendergpo from "../assets/projects/defender.webp"
import Apache_Tomcat from "../assets/projects/Apache_Tomcat_Logo.png"
import password_spray from "../assets/projects/password_spraying.png"
import kerberoast from "../assets/projects/kerberoasting.png"
import Homelab from "../assets/projects/Homelab.png"
import { Link } from 'react-router-dom';  


export const HERO_CONTENT = `I’m a full stack developer with 5 years of experience creating scalable and efficient web apps. My skills include front-end frameworks like Angular and Vue.js, as well as back-end tools such as Python, Flask, Firebase, and Redis. I thrive on crafting innovative solutions that optimize user experience and contribute to business success, always focused on building robust and dependable applications.`;

export const ABOUT_TEXT = `I'm Raju Mighty, an engineering student with a deep passion for full stack development, specializing in building dynamic, user-focused applications. With expertise in databases, server-side logic, and UI/UX design, I’m well-equipped to craft responsive, efficient web applications from concept to deployment. Actively engaged in continuous learning and development, I’m driven to excel as a full stack developer. Leveraging my knowledge in system architecture and coding, I’m committed to building innovative solutions that deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
  year: "2023 - Present",
  role: "Senior Full Stack Developer",
  company: "Google Inc.",
  description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.
   Implemented RESTful APIs and integrated with MongoDB databases.
    Collaborated with stakeholders to define project requirements and timelines.`,
  technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
},
{
  year: "2022 - 2023",
  role: "Frontend Developer",
  company: "Adobe",
  description: `Designed and developed user interfaces for web applications using
   Next.js and React. Worked closely with backend developers to integrate frontend components
    with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
},
{
   year: "2021 - 2022",
   role: "Full Stack Developer",
   company: "Facebook",
   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js.
    Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams 
    to deliver high-quality software products on schedule.`,
   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
},
];
export const CONTACT = {
  address: "Mumbai, India",
  contact_me: "raju6942069withdsa",
  email: "mightyraju6942069@gmail.com",
};
export const PROJECTS = [
  {
    title: "Flipkart Clone Website",
    image: "flipkartClone",
    description: "Developed a full-stack e-commerce website mimicking the core features of Flipkart. Implemented a product catalog, user authentication, and a shopping cart system. The project includes a dynamic front-end for product browsing, and a back-end to manage user data, orders, and payments. Integrated a product recommendation system based on user preferences. The website is built with scalability in mind, ensuring efficient database queries and seamless user experience.",
    technologies: ["React", "Express", "Node.js", "MongoDB", "Stripe API"],
    link: ""
  },
  {
    title: "Custom Login Page with Authentication",
    image: "loginPage",
    description:"Showcased my front-end and back-end development skills by building a secure login page with user authentication and session management. Implemented form validation and password encryption to enhance security. The login system integrates with a database to securely store user credentials and uses JWT (JSON Web Tokens) for session handling. This project focused on creating a responsive and user-friendly interface, ensuring smooth navigation and proper error handling.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "JWT", "MongoDB"],
    link: ""
  },
];

export const CERTIFICATE = {
  {
  title: "Google's Web Development Certification",
  image: "googlecert",
  description: "Completing the Google Web Development Certification marked a pivotal moment in my journey as a developer. This course provided a solid foundation in front-end and back-end web development. It introduced me to the core principles of building responsive, user-friendly websites while enhancing my skills in creating dynamic web applications. The certification has strengthened my ability to design, develop, and deploy robust web solutions, aligning perfectly with my passion for crafting seamless digital experiences.",
  technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
  link: ""
},
};



