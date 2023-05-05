import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="Hero" />
      </div>
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
