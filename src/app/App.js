import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import "./_app.sass";

class App extends Component {
  state = {
    data: [],
  };

  // Form //
  handelGetUserInfo = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      data: [...prevState.data, data],
    }));
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <>
        <Form getUserInfo={this.handelGetUserInfo} />
        <Nav />
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