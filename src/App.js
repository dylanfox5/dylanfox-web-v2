import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";
import CardGroup from "./components/CardGroup/CardGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  var projects = [
    { title: "v3", description: "The third iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v3", id: 1 },
    { title: "v2-react", description: "The second iteration of my porfolio website using ReactJS", link: "https://github.com/dylanfox5/v2-migration", id: 2 },
    { title: "v2", description: "The second iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v2", id: 3 },
    { title: "v1", description: "The first iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v1", id: 4 },
    { title: "Graceland Today", description: "Conceptualized and built an online calendar for Graceland University", link: "https://github.com/dylanfox5/graceland-today", id: 5 },
    { title: "Fox Pad", description: "An online music streaming service that allowed users to listen together in real-time", link: "https://github.com/dylanfox5/foxpad-web", id: 6 },
  ];

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={null} indicators={true} controls={false}>
        <Carousel.Item>
          <h5>Analytics Developer <span>//</span> Evolytics</h5>
          <p>
            I started at Evolytics in August 2021 as an Analytics Developer. This position has accelerated my knowledge in front-end development, 
            the development cycle, analytics implementations, and working with clients.
          </p>
          <p>
            I'm part of teams responsible for the analytics implementation of three clients (Move Inc., Hagerty Insurance, The Kroger Company) that collect behavioral data for over 10M users per 
            day altogether. We accomplish this by writing software for data collection and performing analysis. Tag Management Systems like Adobe Launch and Tealium iQ play a significant part in our development cycle, 
            as well as analytics services such as Adobe Analytics and Google Analytics. This role also requires exceptional skill in technical writing in order to handoff documentation to our clients.
          </p>
          <p>
            Here are some of the technologies we frequently use.
          </p>
          <ul>
            <li>JavaScript, HTML, CSS</li>
            <li>Node.js, ReactJS</li>
            <li>Unit Testing Libraries (Mocha, Chai)</li>
            <li>Adobe Launch, Tealium iQ</li>
            <li>Adobe Analytics, Google Analytics</li>
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <h5>Graduate Student <span>//</span> Graceland University</h5>
          <p>
            I started my MSc in Data Science & Analytics degree at Graceland University in January 2022. Since then, I've completed courses in data science basics,
            how to extract and clean data sets, machine learning, regression analysis, and working with big data.
          </p>
          <p>
            Working through my MSc degree alongside working in analytics development has proven to be time-consuming but very beneficial. I have been able to apply
            knowledge I've learned while working directly in my courses and vice versa.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <h5>Undergraduate Student <span>//</span> Graceland University</h5>
        </Carousel.Item>
      </Carousel>
    );
  }
  

  return (
    <div className="App">
      <MyNavbar />
      <Container className="Home" id="home">
        <Row>
          <Col sm={12} lg={8} className="animate__animated animate__fadeInLeft animate__delay-1s">
            <h3>Hi, I"m <span>Dylan</span> -- an analytics focused software developer who enjoys innovating solutions for complex problems.</h3>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="About">
        <Row>
          <Col sm={12} lg={8} >
            <h1 className="about-title">about-me</h1>
            <h5>
              Leadership <span>//</span> Innovation <span>//</span> Problem-Solving
            </h5>
            <p>
              I"m a strong advocate for serving others; choosing to have
              the humility to put others first and care for others. A good leader must first be a good follower.
              These are the foundations of <span>leadership</span>.
            </p>
            <p>
              Continuously inventing and reinventing how I can serve others & society. The term
              Futurist is one I often use to describe myself. The future and its possibilities excite me.
              I think our potential as humans are limitless when <span>innovation</span> is at the forefront.
            </p>
            <p>
              The art of understanding an obstacle, how it works, and how it can be overcome, is one
              I find nothing short of beautiful. The leaders that bring forth our future and open its
              possibilities are nothing without the vision of <span>problem-solving</span>.
            </p>
            <p>
              This is the ideology I live each day by. Be sure to continue on or follow me on any social media
              to see what that looks like. 🚀
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="Experience">
        <Row>
          <Col sm={12} lg={12}>
            <h1 className="experience-title">experience</h1>
            <ControlledCarousel />
          </Col>
        </Row>
      </Container>
      <Container id="projects" className="Projects">
        <Row>
          <h1 className="projects-title">projects</h1>
        </Row>
        <Row>
          <CardGroup cards={projects} />
        </Row>
      </Container>
      <Container id="contact" className="Contact">
        <Row>
          <Col sm={12} lg={8}>
            <h3>
              Interested in connecting? Shoot me a message.
            </h3>
            <Button href="mailto:dylan.fox.kc@gmail.com" className="contact-btn">contact-me</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
