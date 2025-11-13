import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <main>
      <Container className="mt-4">
        <Row>
          <Col className="text-center">
            <h1>Seja Bem-vindo(a)!</h1>
            <h2>Esta é a MinhaAppReact</h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
