import React, { useRef } from "react";

import Nav from "../components/Nav";
import Services from "../components/Services";
import Intro from "../components/Intro";
import About from "../components/About";
import Counter from "../components/Counter";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const HomePage = () => {
  const myServicesRef = useRef(null);
  const myAboutRef = useRef(null);
  const mySkillRef = useRef(null);
  const myProjectsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav
        onServicesClick={() => scrollToSection(myServicesRef)}
        onAboutClick={() => scrollToSection(myAboutRef)}
        onSkillClick={() => scrollToSection(mySkillRef)}
        onProjectsClick={() => scrollToSection(myProjectsRef)}
      />
      <Intro />
      <Services myServicesRef={myServicesRef} />
      <About myAboutRef={myAboutRef} />
      <Counter />
      <Skills mySkillRef={mySkillRef} />
      <Projects myProjectsRef={myProjectsRef} />
    </div>
  );
};

export default HomePage;
