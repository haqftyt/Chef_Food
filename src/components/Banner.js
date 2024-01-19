import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <section id="home">
      <Carousel>
      <Carousel.Item>
        <img
          class="d-block carouselimage"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt="First slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Hustle with Customers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg"
          alt="Second slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Loyality with Customers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src="https://media.post.rvohealth.io/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"
          alt="Third Slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Respect with Customers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src=" https://www.thomascook.in/blog/wp-content/uploads/2023/09/famous-Karnataka-food-items.jpg"
          alt="Third Slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Taste is Priority</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
};

export default Banner;
