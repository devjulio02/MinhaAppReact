import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function Main() {
  return (
    <Container>
      <Carousel className='carrossel'>
        <Carousel.Item interval={2000}>
          <Image className='imagem-carrossel' src="../src/assets/img1.png" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className='imagem-carrossel' src="../src/assets/img2.png" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className='imagem-carrossel' src="../src/assets/img3.png" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Main;