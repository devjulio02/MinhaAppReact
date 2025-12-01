import { Container, Button, Card, Col, Row } from "react-bootstrap";
import iesTop3 from "../datasets/ies_paraiba_top3.json";
import "./Cards.css";

const Cards = () => {
  return (
    <Container className="cards-wrapper">
      <Row>
        {iesTop3.map((ies) => (
          <Col key={ies.CO_ENTIDADE}>
            <Card>
              <Card.Img variant="top" src={`/${ies.CO_ENTIDADE}.jpg`} 
              />
              
              <Card.Body>
                <Card.Title>{ies.NO_ENTIDADE}</Card.Title>
                <Card.Text>
                  Município: {ies.NO_MUNICIPIO} <br />
                  Matrículas totais: {ies.TOTAL_MATRICULAS}
                </Card.Text>
                <Button variant="primary">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
