// Card.js
import React from 'react';

const Card = ({ color, text }) => {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)",
  };

  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13,
    margin: 0
  };

  return (
    <div style={cardStyle}>
      <div style={{ height: 150, backgroundColor: color }}></div>
      <p style={labelStyle}>{text}</p>
    </div>
  );
};

export default Card;
