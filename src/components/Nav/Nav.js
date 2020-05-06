import React, { Component } from "react";
import { Link } from "react-router-dom";
import S from "./Nav.module.css";

export default class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <Link to="/">LOGO</Link>
        <section className={S.refs}>
          <div>
            <a href="tel:+380673828244">+38 067 382 82 44</a>
          </div>
          <div>Пн-Пт 9:00-20:00</div>
          <div>
            <a href="mailto:taxi062@gmail.com">taxi062@gmail.com</a>
          </div>
          <div>м.Хмельницький, Подільська 93/1 ТРЦ "Куб", 4 кабінет</div>
        </section>
        <Link to="/services">ПОСЛУГИ</Link>
        <Link to="/about">ПРО НАС</Link>
        <Link to="/contacts">КОНТАКТИ</Link>
      </>
    );
  }
}
