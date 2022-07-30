import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';
import { Folder2 } from 'react-bootstrap-icons';

const CardGroup = (props) => {

  const cards = props.cards;

  return (
    cards.map((card) => {
      return <Col xs={12} md={6} lg={4} key={card.id}>
        <Card>
          <Card.Body>
            <a href={card.link}><Folder2 className="folder-icon" /></a>
            <Card.Text as="h5">
              {card.title}
            </Card.Text>
            <Card.Text>
              {card.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    }));
}

export default CardGroup;