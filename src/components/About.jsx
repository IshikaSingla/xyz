import React from 'react'
import aboutimage from '../images/about.jpg'

function About () {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis modi tenetur magni necessitatibus fuga cum, ducimus sequi ratione. Aliquid, itaque saepe! Quam ea maxime deleniti quidem inventore soluta velit. Autem.</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
