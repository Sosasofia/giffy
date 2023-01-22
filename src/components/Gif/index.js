import React from "react";
import "./style.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="Gif-link">
        <h2>{title}</h2>
        <img src={url} alt={title} />
      </div>
    </div>
  );
}