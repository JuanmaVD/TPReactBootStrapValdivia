import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <img className='d-block w-100' style={{maxHeight:"500px", objectFit:'cover'}} src="assets/images/paisaje1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Paisaje 1</h3>
          <p>Montaña</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight:"500px",width: "100%"}} src="assets/images/paisaje2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Paisaje 2</h3>
          <p>Mar</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{maxHeight:"500px",width: "100%", objectFit:'cover'}} src="assets/images/paisaje3jpg.jpg" alt="" />
        <Carousel.Caption>
          <h3>Paisaje 3</h3>
          <p>Mar</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselHome