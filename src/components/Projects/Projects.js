import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Folder2, BoxArrowUpRight } from 'react-bootstrap-icons';
import './Projects.css';

function Projects() {
    return (
        <Container id="projects" className='projects'>
            <Row>
                <h1 className='projects-title'>projects</h1>
                <Col xs={12} md={6} lg={4}>
                    <Row className="mx-1">
                        <Card>
                            <Card.Body>
                                <a target="_blank" href="https://github.com/dylanfox5/dylanfox-v3"><Folder2 className="folder-icon" /></a>
                                <Card.Text as="h5">
                                    v3
                                </Card.Text>
                                <Card.Text>
                                    The third interation of my porfolio website
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mx-1">
                        <Card>
                            <Card.Body>
                                <a target="_blank" href="https://github.com/dylanfox5/dylanfox-v1"><Folder2 className="folder-icon" /></a>
                                <Card.Text as="h5">
                                    v1
                                </Card.Text>
                                <Card.Text>
                                    The first iteration of my porfolio website
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Row className="mx-1">
                        <Card>
                            <Card.Body>
                                <a target="_blank" href="https://github.com/dylanfox5/v2-migration"><Folder2 className="folder-icon" /></a>
                                <Card.Text as="h5">
                                    v2-react
                                </Card.Text>
                                <Card.Text>
                                    The second interation of my porfolio website using React
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mx-1">
                        <Card>
                            <Card.Body>
                                <a target="_blank" href="https://github.com/dylanfox5/graceland-today"><Folder2 className="folder-icon" /></a>
                                <Card.Text as="h5">
                                    Graceland Today
                                </Card.Text>
                                <Card.Text>
                                    Conceptualized and built an online calendar for Graceland University. It contained daily, weekly, & monthly events
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Row className="mx-1">
                        <Card>
                            <Card.Body>
                                <a target="_blank" href="https://github.com/dylanfox5/dylanfox-v2"><Folder2 className="folder-icon" /></a>
                                <Card.Text as="h5">
                                    v2
                                </Card.Text>
                                <Card.Text>
                                    The second interation of my porfolio website
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mx-1">

                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;