import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/undraw_message_sent.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'

export const Contact = () => {
  const formInitialDetails = {
    // firstName: '',
    // lastName: '',
    // email: '',
    // phone: '',
    from: '',
    subject: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [loading, setLoading] = useState(false)

  // const [state, handleSubmit] = useForm('xoqzayob')

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

                  <form
                    action="https://formsubmit.co/skrfederico@gmail.com"
                    method="POST"
                  >
                    <input type="text" name="name" required />
                    <input type="email" name="email" required />
                    <button type="submit">Send</button>
                  </form>

                  {/* <form
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
                  </form> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
