import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

/*const cardInfo = [
	{
		Image: "./img/1jpg",
		Title: "Card 1",
		Text: "Lorem Ipsum 1",
		ButtonLabel: "Go to 1",
		ButtonUrl: "",
	},
	{
		Image: "./img/2jpg",
		Title: "Card 2",
		Text: "Lorem Ipsum 2",
		ButtonLabel: "Go to 2",
		ButtonUrl: "",
	},
	{
		Image: "./img/3jpg",
		Title: "Card 3",
		Text: "Lorem Ipsum 3",
		ButtonLabel: "Go to 3",
		ButtonUrl: "",
	},
	{
		Image: "./img/4jpg",
		Title: "Card 4",
		Text: "Lorem Ipsum 4",
		ButtonLabel: "Go to 4",
		ButtonUrl: "",
	},
];*/

const CardMine = (props) => {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imageUrl} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<Button variant="primary">{props.buttonLabel}</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default CardMine;
