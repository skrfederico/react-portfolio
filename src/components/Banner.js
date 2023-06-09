import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import undraw_programming from '../assets/img/undraw_programming.svg'
// import headerImg from '../assets/img/header-img.svg'

import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Typewriter } from 'react-simple-typewriter'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'a Web Developer',
    'a Product Manager',
    'a bilingual (Spa-Eng) educator'
  ]
  const period = 100

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 10)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(220) // CONTROL SPEED THE MORE IT IS THE SLOWER THE ANIMATION
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Federico`}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="50"
                      data-rotate='[ "a Web Developer", "a Bilingual(Spa-Eng) Educator" , " a Content Creator" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className=" capitalize">
                    Hola 👋 I am a full-stack web developer with a
                    specialization in React. I am constantly expanding my
                    knowledge of new technologies and exploring ways to
                    implement them effectively. With over 17 years of experience
                    in the education industry, I bring a unique perspective to
                    my work and strive to create innovative and efficient
                    solutions.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={undraw_programming} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
