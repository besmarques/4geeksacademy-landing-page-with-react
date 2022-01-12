import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//include images into your bundle
import c1Image from "../../img/1.jpg";
import c2Image from "../../img/2.jpg";
import c3Image from "../../img/3.jpg";
import c4Image from "../../img/4.jpg";

import NavBar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import CardMine from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<NavBar />
						<JumboTron />
						<Container>
							<Row>
								<Col>
									<CardMine
										title="Beach"
										description="This is a great beach"
										imageUrl={c1Image}
										buttonLabel="See this beach"
									/>
								</Col>
								<Col>
									<CardMine
										title="Reflection"
										description="Reflection on the window"
										imageUrl={c2Image}
										buttonLabel="How to capture a reflection"
									/>
								</Col>
								<Col>
									<CardMine
										title="Calm"
										description="Feel calm"
										imageUrl={c3Image}
										buttonLabel="Learn how to calm yourself"
									/>
								</Col>
								<Col>
									<CardMine
										title="Sea"
										description="Sailing the sees"
										imageUrl={c4Image}
										buttonLabel="Sail now"
									/>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
