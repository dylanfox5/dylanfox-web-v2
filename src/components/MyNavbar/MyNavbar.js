import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MyNavbar.css';

import { debounce } from '../../utilities/utils';
import { useState, useEffect } from 'react';
import { Linkedin, Instagram, Github } from 'react-bootstrap-icons';

function MyNavbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 40 ) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Navbar sticky="top" variant="light" expand="lg" className="animate__animated animate__fadeInDown animate__delay-1s" style={{top: visible ? '0' : '-60px', transition: "top 0.25s"}}>
      <Container>
        <Navbar.Brand href="/">dfox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav navbarScroll>
            <Nav.Link className="nav-item" href="#about">about</Nav.Link>
            <Nav.Link className="nav-item" href="#projects">projects</Nav.Link>
            <Nav.Link className="nav-item" href="#contact">contact</Nav.Link>
            <NavDropdown title="social" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/dylanffox/"><Linkedin /></NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/dfox_5/"><Instagram /></NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/dylanfox5"><Github /></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;