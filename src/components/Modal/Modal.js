import React, { Component } from "react";
import Form from "../Form/Form";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.handleModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.handleModalClose);
  }

  render() {
    return (
      <div className={styles.overlay}>
        <Form getUserInfo={this.props.handelGetUserInfo} />
      </div>
    );
  }
}
