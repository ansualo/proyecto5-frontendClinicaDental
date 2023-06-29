import React from 'react';
import './CustomCard.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const CustomCard = ({ title , list1, list2, list3, list4 }) => {

  return (
    <Card className="cardDesign">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{text}</Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{list1}</ListGroup.Item>
        <ListGroup.Item>{list2}</ListGroup.Item>
        <ListGroup.Item>{list3}</ListGroup.Item>
        <ListGroup.Item>{list4}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
