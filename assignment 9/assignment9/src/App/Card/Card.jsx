// Card.js
import React from 'react';

const Card = ({ color, text, description = '' }) => {
  const cardStyle = {
    height: 300,
    width: 300,
    padding: 0,
    backgroundColor: "#FFF",
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)",
  };

  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13
  };

  return (
    <div style={cardStyle}>
      <div style={{ height: 150, backgroundColor: color }}></div>
      <p style={labelStyle}>{text}</p>
      {description && <p style={{ padding: "0 13px" }}>{description}</p>}
    </div>
  );
};

export default Card;

