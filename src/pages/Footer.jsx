import '../styles.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons'


export default function Footer() {
  return (
    <div className='footer'>
      <section className='social-media-buttons'>
        <SocialIcon url="https://github.com/AnastasiiaSob"/>
        <SocialIcon url="https://www.linkedin.com/in/anastasiia-ried/"/>
        <SocialIcon url='https://medium.com/@anastasiia.ried'/>
      </section>
      <div className='copyright'>
        <p>© 2024 Copyright</p>
      </div>
    </div>
  )
}
