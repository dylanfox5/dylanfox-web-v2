import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
    return (
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
    );
}

export default Contact;