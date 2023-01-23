import React from "react";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import TrendingSearches from "../components/TrendingSearches";


export default function Home() {
  const { gifs } = useGifs();

  return (
    <div className="App-main">
      <TrendingSearches />
      <ListOfGifs gifs={gifs} />
    </div>
  );
}