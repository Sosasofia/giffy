import React from "react";
import Gif from "../Gif";
import "./style.css";

export default function ListOfGifs({ gifs }) {

  return <div className="ListOfGifs">
    {
      gifs.map(({ id, title, url }) =>
        <Gif className="List-item"
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>;
}