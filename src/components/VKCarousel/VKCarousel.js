import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import callbacks from "../../json/callbacks.json";
import css from "./VKCarousel.module.css";

const VKCarousel = () => (
  //   <Row>
  <Carousel className={css.carousel}>
    {callbacks.map((callback) => (
      //   <Col>
      <Carousel.Item className={css.carouselItem}>
        <div className={css.captionBody}></div>
        <Carousel.Caption>
          <div key={callback.name} className={css.callBackWraper}>
            <h3 className={css.name}>{callback.name}</h3>
            <p className={css.status}>{callback.status}</p>
            <p className={css.callbackText}>{callback.callbackText}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      //   </Col>
    ))}
  </Carousel>
  //   </Row>
);

export default VKCarousel;
