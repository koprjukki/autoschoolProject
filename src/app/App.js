import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Gallery from "../components/Gallery/Gallery";
import VKCarousel from "../components/VKCarousel/VKCarousel";

import "./_app.sass";
import Modal from "../components/Modal/Modal";

class App extends Component {
  state = {
    data: [],
    modal: false,
  };

  // Form //
  handelGetUserInfo = (data) => {
    this.setState((prevState) => ({
      data: [...prevState.data, data],
    }));
  };

  // Modal Window
  handleModalOpen = () => {
    this.setState({ modal: true });
  };

  handleModalClose = (e) => {
    if (e.code === "Escape") {
      this.setState({ modal: false });
    }
  };

  render() {
    const { data, modal } = this.state;
    console.log(data);
    return (
      <>
        <VKCarousel />

        <Form getUserInfo={this.handelGetUserInfo} />

        {modal && (
          <Modal src={modal} handleModalClose={this.handleModalClose}>
            <Form getUserInfo={this.handelGetUserInfo} />
          </Modal>
        )}
        <Gallery />

        <Nav />
        <button onClick={this.handleModalOpen}>Запишись на курс!</button>
        <Switch>
          <Route path="/" exact component="HomePage" />
          <Route path="/services" component="ServicesPage" />
          <Route path="/about" component="AboutPage" />
          <Route path="/contacts" component="ContactsPage" />
        </Switch>
      </>
    );
  }
}

export default App;
