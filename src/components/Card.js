import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Card.css";
import holder from "./holder.jpg";

const DisplayCard = ({ id, name, description,taskDone, deleteCard,cardStrike }) => {
  
  return (
    <div className="cardAlign col-sm-4">
    
      <Card className="displayCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={holder} />
        <Card.Body>
          <Card.Title style={{ textDecoration: taskDone ? "line-through" : "none"}}>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className="btn" onClick={()=>{ cardStrike(id)}} >{!taskDone ?"Done" : "undone"}</Button>
          <Button className="btn" id={id} onClick={()=>{ deleteCard(id)}}  variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayCard;
