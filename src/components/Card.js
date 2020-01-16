import React from "react";

const Card = ({ article: { urlToImage, description, title, read } }) => (
  <div
    style={read ? { borderColor: "blue" } : { borderColor: "black" }}
    className="card"
  >
    <div className="section group">
      <div className="col span_25">
        <img src={urlToImage} alt="article" />
      </div>
      <div className="col span_70">
        <div className="description">{description}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  </div>
);

export default Card;
