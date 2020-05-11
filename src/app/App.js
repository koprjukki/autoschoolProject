import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Slider from "../components/Slider/Slider";
import VKSlider from "../components/VKSlider/VKSlider";
import Gallery from "../components/Gallery/Gallery";
import VKsCallbackSlider from "../components/VKsCallbackSlider/VKsCallbackSlider";

import city from "../json/city.json";
import "./_app.sass";

class App extends Component {
  state = {
    data: [],
  };

  // Form //
  handelGetUserInfo = (data) => {
    this.setState((prevState) => ({
      data: [...prevState.data, data],
    }));
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <>
        <VKSlider />
        <VKsCallbackSlider />
        <Form getUserInfo={this.handelGetUserInfo} />
        <Nav />
        <Switch>
          {/* <Route path="/" exact component="HomePage" /> */}
          <Route path="/services" component="ServicesPage" />
          <Route path="/about" component="AboutPage" />
          <Route path="/contacts" component="ContactsPage" />
        </Switch>
        <Gallery />
      </>
    );
  }
}

export default App;
