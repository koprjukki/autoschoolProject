import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
// import Item from "react-elastic-carousel";

import callbacks from "../../json/callbacks.json";
import css from "./ElasticCarousel.module.css";

const ElasticCarousel = () => (
  <Carousel itemsToShow={3} pagination={false} className={css.carouselWrapper}>
    {callbacks.map((callback) => (
      <div key={callback.name} className={css.carouselItemWrapper}>
        <h3 className={css.name}>{callback.name}</h3>
        <p className={css.status}>{callback.status}</p>
        <p className={css.callbackText}>{callback.callbackText}</p>
      </div>
    ))}
  </Carousel>
);

export default ElasticCarousel;
