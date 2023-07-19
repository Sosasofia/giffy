import React from "react";
import Gif from "../Gif";
import MasonryLayout from "components/MasonryLayout";

export default function ListOfGifs({ gifs }) {

  return (
    <MasonryLayout gap={20}>
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
    </MasonryLayout>
  );
}