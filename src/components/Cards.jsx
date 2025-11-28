import { Container } from "react-bootstrap";
import instituicoesEnsino from "../datasets/censoEscolar.js";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Cards.css";

const Cards = () => {
  let instituicoesEnsinoJson = [...instituicoesEnsino];
  return (
    <Container className="cards-wrapper">
      <Row>
        {instituicoesEnsinoJson.map((instituicaoEnsino) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={instituicaoEnsino.urlImagem} />
                <Card.Body>
                  <Card.Title>{instituicaoEnsino.nome}</Card.Title>
                  <Card.Text>
                    Município: {instituicaoEnsino.municipio}
                  </Card.Text>
                  <Button variant="primary">Saiba Mais</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
