import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import './Carrousel.css';

const Carrousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item interval={2000}>
          <Image className="imagem-carrossel" src="../src/assets/img1.png" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Image className="imagem-carrossel" src="../src/assets/img2.png" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Image className="imagem-carrossel" src="../src/assets/img3.png" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
  
};

export default Carrousel;