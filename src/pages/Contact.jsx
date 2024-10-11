import './../styles/styles.css'
import './../styles/styles.css'
import React from 'react'
import ContactForm from './../components/ContactForm'

function Contact() {
  return (
    <section id="contact" className="contact wrapper">
      <div className="contact-info">
        <h2>Get in touch with me</h2>
        <div className="contact-form">
        <ContactForm />
      </div>
      </div>
      
    </section>
  )
}

export default Contact
