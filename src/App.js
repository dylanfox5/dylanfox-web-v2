import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";
import CardGroup from "./components/CardGroup/CardGroup";
import ControlledCarousel from "./components/ControlledCarousel/ControlledCarousel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [aboutRef, aboutInView] = useInView();
  const [expRef, expInView] = useInView();
  const [projRef, projInView] = useInView();
  const [conRef, conInView] = useInView();
  

  useEffect(() => {
    if (aboutInView) {
      let el = document.getElementById("about");
      el.classList.remove("hide");
      el.classList.add("animate__animated", "animate__fadeInLeft");
    } else if (expInView) {
      let el = document.getElementById("experience");
      el.classList.remove("hide");
      el.classList.add("animate__animated", "animate__fadeInLeft");
    } else if (projInView) {
      let el = document.getElementById("projects");
      let el1 = document.getElementById("projects-title");
      let el2 = document.getElementById("projects-cards");
      el.classList.remove("hide");
      el1.classList.add("animate__animated", "animate__fadeInLeft");
      el2.classList.add("animate__animated", "animate__bounceIn", "animate__delay-1s");
    } else if (conInView) {
      let el = document.getElementById("contact");
      el.classList.remove("hide");
      el.classList.add("animate__animated", "animate__fadeInLeft");
    }
  }, [aboutInView, expInView, projInView, conInView]);

  var projects = [
    { title: "v3", description: "The third iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v3", id: 1 },
    { title: "v2-react", description: "The second iteration of my porfolio website using ReactJS", link: "https://github.com/dylanfox5/v2-migration", id: 2 },
    { title: "v2", description: "The second iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v2", id: 3 },
    { title: "v1", description: "The first iteration of my portfolio website", link: "https://github.com/dylanfox5/dylanfox-v1", id: 4 },
    { title: "Graceland Today", description: "Conceptualized and built an online calendar for Graceland University", link: "https://github.com/dylanfox5/graceland-today", id: 5 },
    { title: "Fox Pad", description: "An online music streaming service that allowed users to listen together in real-time", link: "https://github.com/dylanfox5/foxpad-web", id: 6 },
  ];

  return (
    <div className="App">
      <MyNavbar />
      <Container className="Home" id="home">
        <Row>
          <Col sm={12} lg={8} className="animate__animated animate__fadeInLeft">
            <h3>Hi, I'm <span>Dylan</span> -- an analytics focused software developer who enjoys innovating solutions for complex problems.</h3>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="About hide">
        <Row>
          <Col sm={12} lg={8} ref={aboutRef}>
              <h1 className="about-title">about-me</h1>
              <h5>
                Leadership <span>//</span> Innovation <span>//</span> Problem-Solving
              </h5>
              <p>
                I'm a strong advocate for serving others; choosing to have
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
      <Container id="experience" className="Experience hide">
        <Row>
          <Col sm={12} lg={12} ref={expRef}>
            <h1 className="experience-title">experience</h1>
            <ControlledCarousel />
          </Col>
        </Row>
      </Container>
      <Container id="projects" className="Projects hide" ref={projRef}>
        <Row>
          <h1 id="projects-title" className="projects-title">projects</h1>
        </Row>
        <Row id="projects-cards">
          <CardGroup cards={projects} />
        </Row>
      </Container>
      <Container id="contact" className="Contact hide">
        <Row>
          <Col sm={12} lg={8} ref={conRef}>
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
