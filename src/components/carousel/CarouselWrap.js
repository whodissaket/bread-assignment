import React from "react";
import { Container, Row } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import { CarouselItems } from "./CarouselData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./CarouselWrapper.css";

function Carousel() {
  return (
    <Container fluid className="car__wrapper_main">
      <Row>
        <section className="flex-col col mx-auto section__container">
          <h4 className=" pt-3 mb-2 header text-center text-white">
            BROWSE MY OFFERINGS
          </h4>

          <div className="mx-auto col-lg-11 flex-btw">
            {CarouselItems.map((item, index) => {
              return <CarouselItem key={index + 1} properties={item} />;
            })}
          </div>
          <div className="arrows flexed  mx-auto">
            <span className="leftArrow flexed">
              <GoArrowLeft />
            </span>

            <span className="rightArrow flexed">
              <GoArrowRight />
            </span>
          </div>
        </section>
      </Row>
    </Container>
  );
}

export default Carousel;
