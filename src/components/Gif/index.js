import React from "react";
import { Link } from "wouter";
import "./style.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h2>{title}</h2>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}