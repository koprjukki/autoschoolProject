import React, { Component } from "react";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.handleModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.handleModalClose);
  }

  render() {
    console.log(this.props);

    return <div className={styles.overlay}>{this.props.children}</div>;
  }
}
