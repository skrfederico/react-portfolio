import { Container, Row, Col, Tab, Nav, Carousel } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'

import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

import ploggerIndex from '../assets/img/ploggerIndex.png'
import ploggerForm from '../assets/img/ploggerForm.png'
import ploggerPhonelog from '../assets/img/ploggerPhonelog.png'

import movieAppMovieTop from '../assets/img/movieAppMovieTop.png'
import movieAppMovieBottom from '../assets/img/movieAppMovieBottom.png'
import movieAppReviews from '../assets/img/movieAppReviews.png'

import teachAidGroups from '../assets/img/teachAidGroups.png'
import teachAidRateStudents from '../assets/img/teachAidRateStudents.png'
import teachAidAverages from '../assets/img/teachAidAverages.png'
import teachAidReports from '../assets/img/teachAidReports.png'

import Illustration from '../assets/img/try.png'
import speechBubble from '../assets/img/image.png'
import github from '../assets/img/icons8-github.svg'
import web from '../assets/img/web.png'

// slick css
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'
import { ExternalLink } from 'react-external-link'

import { BsGithub } from 'react-icons/bs'
import { BsGlobe } from 'react-icons/bs'
import { Tooltip as ReactTooltip } from 'react-tooltip'
// import '../../node_modules/react-tooltip/dist/react-tooltip.css'
// import '../../node_modules/react-tooltip/dist/'

export const Projects = () => {
  const projects1 = [
    {
      title: "Teacher's assistant",
      description: 'Design & Development'
      // img1: airbnb,
    }
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight className=" text-white whiteColor z-50" />,
    prevArrow: <BsArrowLeft className=" text-white whiteColor z-50" />
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>

                  <div className="leverageHold">
                    <p className=" capitalize o">
                      ""The first rule of any technology used in a business is
                      that automation applied to an efficient operation will
                      magnify the efficiency. The second is that automation
                      applied to an inefficient operation will magnify the
                      inefficiency." - Bill Gates.
                    </p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="first">Teacher's Aid</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="second">Movies Reviews</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="third">P(hone)LOGGER</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img
                                src={teachAidGroups}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={teachAidRateStudents}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={teachAidAverages}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={teachAidReports}
                                className=" rounded-xl mb-8"
                              />
                            </Slider>

                            <div className="flex justify-center ccc">
                              <img
                                src={Illustration}
                                className="w20rem ml-10"
                              />

                              <div className=" teach_assistIntroHold">
                                <p className=" capitalize teach_assistIntro">
                                  Teacher's assistant is an app designed to
                                  simplify lives of education professionals
                                  <ExternalLink
                                    href="https://github.com/skrfederico"
                                    className=" uppercase text-yellow-400 hover:text-yellow-500"
                                  >
                                    {' '}
                                    See more on my github{' '}
                                  </ExternalLink>{' '}
                                  "
                                </p>
                              </div>
                            </div>

                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live"
                              place="bottom"
                              content="live project"
                            />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/skrfederico">
                                <BsGithub
                                  className=" inline-block white text-3xl"
                                  id="github"
                                />
                              </ExternalLink>

                              <ExternalLink href="https://github.com/skrfederico">
                                <BsGlobe
                                  className=" white text-3xl inline-block"
                                  id="live"
                                />
                              </ExternalLink>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img
                                src={movieAppMovieTop}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={movieAppMovieBottom}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={movieAppReviews}
                                className=" rounded-xl mb-8"
                              />
                            </Slider>

                            <div className="flex justify-center ccc">
                              <img
                                src={Illustration}
                                className="w20rem ml-10"
                              />

                              <div className=" ProjectIntroHold">
                                <p className=" capitalize ProjectIntro">
                                  "DaMaFe movie theater, owned by Dawn, Matthew,
                                  and Fede, is an online movie review platform
                                  that enables users to create, read, update,
                                  and delete movie reviews using a MERN stack
                                  application with React. The platform is built
                                  with technologies such as MongoDB, Express,
                                  TailWind, JavaScript, brcryptjs, and JSX..{' '}
                                  <ExternalLink
                                    href="https://github.com/skrfederico"
                                    className="text-yellow-400 hover:text-yellow-500 uppercase"
                                  >
                                    {' '}
                                    See more on my github{' '}
                                  </ExternalLink>
                                  "
                                </p>
                              </div>
                            </div>

                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github2"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live2"
                              place="bottom"
                              content="live project"
                            />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/skrfederico">
                                <BsGithub
                                  className=" inline-block white text-3xl"
                                  id="github2"
                                />
                              </ExternalLink>

                              <ExternalLink href="https://github.com/skrfederico">
                                <BsGlobe
                                  className=" white text-3xl inline-block"
                                  id="live2"
                                />
                              </ExternalLink>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img
                                src={ploggerIndex}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={ploggerForm}
                                className=" rounded-xl mb-8"
                              />
                              <img
                                src={ploggerPhonelog}
                                className=" rounded-xl mb-8"
                              />
                            </Slider>

                            <div className="flex justify-center ccc">
                              <img
                                src={Illustration}
                                className="w20rem ml-10"
                              />

                              <div className=" projectIntroHold">
                                <p className=" capitalize projectIntro">
                                  "Vlogger is my first CRUD app{' '}
                                  <ExternalLink
                                    href="https://github.com/skrfederico"
                                    className="text-yellow-400 hover:text-yellow-500 uppercase"
                                  >
                                    {' '}
                                    See more on my github{' '}
                                  </ExternalLink>
                                  "
                                </p>
                              </div>
                            </div>

                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github3"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live3"
                              place="bottom"
                              content="live project"
                            />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/skrfederico/teachers_assistant">
                                <BsGithub
                                  className=" inline-block white text-3xl"
                                  id="github3"
                                />
                              </ExternalLink>

                              <ExternalLink href="https://skrfederico-project.netlify.app/">
                                <BsGlobe
                                  className=" white text-3xl inline-block"
                                  id="live3"
                                />
                              </ExternalLink>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
