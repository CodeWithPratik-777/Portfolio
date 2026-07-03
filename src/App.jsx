import React from 'react'

import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import EducationAndExperience from './components/EducationAndExperience'
import MyWork from './components/MyWork'
import Contact from './components/Contact'


import '../src/css/App.css'

export default function App() {

  return (
    <div className='custom-cursor'>
      <Header />
      <Home />
      <AboutMe/>
      <MySkills />
      <EducationAndExperience />
      <MyWork />
      <Contact />
    </div>
  )
}
