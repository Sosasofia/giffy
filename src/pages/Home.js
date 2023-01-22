import React from "react";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";


export default function Home() {
  const { gifs } = useGifs();

  return (
    <div className="App-main">
      <ListOfGifs gifs={gifs} />
    </div>
  );
}