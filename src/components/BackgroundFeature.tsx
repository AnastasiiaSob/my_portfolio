import React from 'react'
import munichBg from '../assets/images/munich.png'
import { useEffect, useState } from 'react'

function BackgroundFeature() {
  return <div className='background-feature-container'>
    <img src={munichBg} alt="" className='cropped-image'/>
  </div>
}

export default BackgroundFeature
