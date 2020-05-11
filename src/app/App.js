import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider";
import VKSlider from "../components/VKSlider/VKSlider";
import Gallery from "../components/Gallery/Gallery";
import VKsCallbackSlider from "../components/VKsCallbackSlider/VKsCallbackSlider";

import city from "../json/city.json";
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

  handleModalClose = ({ target, key }) => {
    if (target.nodeName === "DIV" || key === "Escape") {
      this.setState({ modal: false });
    }
  };

  render() {
    const { data, modal } = this.state;
    console.log(data);
    return (
      <>
        <VKSlider />
        <VKsCallbackSlider />

        <Nav />
        <Switch>
          {/* <Route path="/" exact component="HomePage" /> */}
          <Route path="/services" component="ServicesPage" />
          <Route path="/about" component="AboutPage" />
          <Route path="/contacts" component="ContactsPage" />
        </Switch>

        <button onClick={this.handleModalOpen}>Запишись на курс!</button>
        {modal && (
          <Modal src={modal} handleModalClose={this.handleModalClose} />
        )}
        <Gallery />
      </>
    );
  }
}

export default App;
