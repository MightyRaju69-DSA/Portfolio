import React from "react";
import Hero from "./components/Hero";
import Techskills from "./components/Techskills";
import Aboutme from "./components/Aboutme"
import Mycertificate from "./components/Mycertificate";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div>
    <Navbar/>
    <Techskills/>
    <Hero/>
    <Mycertificate/>
    <Contact/>
    <Aboutme/>
    </div>
  )
}

export default App;