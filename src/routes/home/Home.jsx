import React from 'react'
import Hero from '../../components/hero/Hero';
import AboutMe from '../../components/aboutMe/AboutMe';
import Skills from '../../components/mySkills/Skills';
import Projects from '../../components/myProjects/Projects';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home