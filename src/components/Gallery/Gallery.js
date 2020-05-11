import React from "react";
import { cars } from "../../Resourses/images";
import S from "./Gallery.module.css";

const Gallery = () => (
  <div className={S.gallery}>
    <div className={S.box}>
      <div className={S.gallery__item}>
        <img className={S.img} src={cars[0]} alt="car" />
      </div>
      <div className={S.gallery__item}>
        <img className={S.img} src={cars[2]} alt="car" />
      </div>
    </div>
    <div className={S.box}>
      <div className={S.gallery__item}>
        <p>Всі наші автомобілі доглянуті та готові навчати нових водіїв </p>
      </div>
      <div className={S.gallery__item}>
        <img className={S.img} src={cars[3]} alt="car" />
      </div>
    </div>
    <div className={S.car}>
      <img className={S.img} src={cars[1]} alt="car" />
    </div>
  </div>
);

export default Gallery;
