import { useEffect, useState } from 'react'
import styles from './styles.module.css'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', topic: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  // to see immediate changes on formData
  useEffect(() => {
    console.log('Form data: ', formData)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    // setFormData is asynchronous!
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    let errors = {}
    if (!formData.name) errors.name = 'Name if requred!'
    if (!formData.topic) errors.topic = 'Topic is required'
    if (!formData.email) errors.email = 'Email is required'
    if (!formData.message) errors.message = 'Message is required'
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setSuccessMessage('')
    } else {
      setFormData({ name: '', topic: '', email: '', message: '' })
      setFormErrors({})
      setSuccessMessage('The form submitted successfully!')
    }
  }

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {successMessage !== '' ? (
          <p className="success-message">{successMessage}</p>
        ) : (
          <div>
            <div className="name">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </div>
            <div className="topic">
              <label>Topic</label>
              <input type="text" name="topic" value={formData.topic} onChange={handleChange} placeholder="Job offer" />
              {formErrors.topic && <p className="error">{formErrors.topic}</p>}
            </div>
            <div className="email">
              <label>Your E-Mail</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Job offer" />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
            <div className="message">
              <label>Your message</label>
              <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} />
              {formErrors.message && <p className="error">{formErrors.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm
