import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="up">
        <img src="/henessy.jpg" alt="" />
      </div>
      <div className="down">
        <h3 className="name">Tatiana Saris</h3>
        <p className="location">Florida, USA </p>
        <p className="age">21</p>

      </div>
    </div>
  );
}

export default Card;
