import MyNavbar from './components/MyNavbar/MyNavbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container className="Home" id="home">
        <Row>
          <Col sm={12} lg={8} className="animate__animated animate__fadeInLeft animate__delay-1s">
            <h3>Hi, I'm <span>Dylan</span> -- an analytics focused software developer who enjoys innovating solutions for complex problems.</h3>
          </Col>
        </Row>
      </Container>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
