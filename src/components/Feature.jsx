import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.jpg'
import fimage2 from '../images/2.jpg'
import fimage3 from '../images/3.jpg'

function Feature () {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title='Beat' />
        <Featurebox image={fimage2} title='Melody' />
        <Featurebox image={fimage3} title='Lyrics' />
      </div>
    </div>
  )
}

export default Feature
