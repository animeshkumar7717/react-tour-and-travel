import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-banner">
        <h4>Travel & Tour</h4>
        <p>welcome to the best tourist package in buget free</p>
        <NavLink to={'/travel'}><button className='hero-btn'>Search</button></NavLink>
        
      </div>
    </div>
  )
}

export default Hero
