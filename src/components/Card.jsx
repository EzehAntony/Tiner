import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="up">
        <img src="/henessy.jpg" alt="" />
        <div className="action">
          <img src="/rheart.svg" alt="" />
          <img src="/star.svg" alt="" />
          <img src="/close.svg" alt="" />
        </div>
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
