import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';
import { Folder2 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';


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
      <Container id="projects" className="Projects">
        <Row>
          <h1 className="projects-title">projects</h1>
        </Row>
        <Row>
          {projects.map((project) => {
            return <Col xs={12} md={6} lg={4} key={project.id}>
              <Card>
                <Card.Body>
                  <a href={project.link}><Folder2 className="folder-icon" /></a>
                  <Card.Text as="h5">
                    {project.title}
                  </Card.Text>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          })}
        </Row>
      </Container>
      <Container id="contact" className='contact'>
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
