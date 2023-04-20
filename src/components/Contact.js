import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/undraw_message_sent.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [loading, setLoading] = useState(false)

  const [state, handleSubmit] = useForm('xoqzayob')

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const loadingHandler = () => {
    if (formDetails.firstName != '' && formDetails.email != '') {
      setLoading(true)
    }
  }

  const loadingFalseHandler = () => {
    setLoading(false)
    formDetails.email = ''
    formDetails.firstName = ''
    formDetails.message = ''
  }

  setTimeout(loadingFalseHandler, 10000)

  return (
    <section className="contact relative mt-8" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2 className=" capitalize">
                    Reach out or contact me on my socials
                  </h2>
                  {/* // */}
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    action={process.env.REACT_EMAIL_KEY}
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Name"
                          required
                          onChange={(e) =>
                            onFormUpdate('firstName', e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          htmlFor="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate('email', e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          id="message"
                          name="message"
                          onChange={(e) =>
                            onFormUpdate('message', e.target.value)
                          }
                        ></textarea>

                        <button type="submit" onClick={loadingHandler}>
                          <span>
                            {loading === true ? 'Sending...' : 'Send'}
                          </span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                  {/* // */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

// import './contact.css'

// import React, { useRef, useState } from 'react'

// import { MdOutlineEmail } from 'react-icons/md'
// // import emailjs from '@emailjs/browser'

// export const Contact = () => {
//   const [message, setMessage] = useState(false)
//   const formRef = useRef()
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setMessage(true)
//       // emailjs
//       .sendForm(
//         'service_k2qawqh',
//         'template_c6rkpn6',
//         formRef.current,
//         'X7K7ebhIeOy3YwHki'
//       )
//       .then(
//         (result) => {
//           console.log(result.text)
//         },
//         (error) => {
//           console.log(error.text)
//         }
//       )

//     e.target.reset()
//   }
//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h5>
//         I do receive your messages and will respond asap if the valid email is
//         provided :)
//       </h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>skrfederico@gmail.com</h5>
//             <a href="mailto:skrfederico@gmail.com">Send a message</a>
//           </article>
//         </div>
//         <form ref={formRef} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Your Full Name"
//             name="user_name"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Your Email"
//             name="user_email"
//             required
//           />
//           <textarea
//             placeholder="Your message"
//             rows="7"
//             name="message"
//             required
//           ></textarea>
//           <button type="submit" className="btn btn-primary">
//             Send Message
//           </button>
//           {message && <span>Thanks, I'll reply ASAP :)</span>}
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Contact
