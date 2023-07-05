import React from 'react'
import Artistes from '../pages/Artist/Artists'
import Team from '../pages/Team/Team'
import Community from '../pages/Community/Community'
import Tokenomics from '../pages/Token/Token'
import Home from '../components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from '../components/Navbar/Navbar'
import './layout.css'
import Footer from '../components/Footer/Footer'
import ProjectsData from '../ProjectData'

const Layouts = () => {
  return (
    <div className="layout-container">
      <Navigation />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/team" element={<Team />} />
          <Route path='/community' element={<Community/>}/>
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/projectsform" element={<ProjectsData />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layouts
