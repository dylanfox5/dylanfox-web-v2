import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';

function MyNavbar() {
    return (
        <Navbar sticky="top" variant="light" expand="lg" className="animate__animated animate__fadeInDown animate__delay-1s">
            <Container>
                <Navbar.Brand href="/">dfox</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav navbarScroll>
                        <Nav.Link className="nav-item" href="#about">about</Nav.Link>
                        <Nav.Link className="nav-item" href="#projects">projects</Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;