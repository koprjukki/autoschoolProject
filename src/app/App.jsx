import React from "react";
import "./_app.sass";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";

export default function App() {
	return (
		<>
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
