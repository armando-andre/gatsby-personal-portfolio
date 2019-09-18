import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = () => {
  return (
<Carousel slide={false}>
  <Carousel.Item className="carousel-item">
    <h1>Welcome to my personal portfolio</h1>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <h1>Hello to my personal portfolio</h1>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <h1>Alloha to my personal portfolio</h1>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselComponent;