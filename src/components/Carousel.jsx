/** @format */

import * as React from "react";
import "../assets/index.css";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/img1.jpg"

export default function CarouselProducts() {
  return (
    <div className="carouselContainer p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 caroulselImage"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroulselImage"
            src="https://www.asrock.com/images/product_AMDRX6000.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroulselImage"
            src="https://electronicstore.com.pe/media/catalog/category/amazon-banner-gaming-days_1.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
