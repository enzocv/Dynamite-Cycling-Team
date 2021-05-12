import React from 'react'
import Navigation from '../components/Navigation'
import HeroImage from '../components/HeroImage'
import About from '../components/About'
import Team from '../components/Team'
import TeamRoutes from '../components/TeamRoutes'
import Footer from '../components/Footer'
import Competitions from '../components/Competitions'
import { SliderData } from '../components/TeamRoutes/SliderData'

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-50">
        <HeroImage />
        <div className="px-8">
          <About />
          <Team />
          <TeamRoutes Slides={SliderData} />
          <Competitions />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index
