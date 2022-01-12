import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<JumboTron />
			<Card />
		</div>
	);
};

export default Home;
