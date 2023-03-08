import React from "react";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import TrendingSearches from "../components/TrendingSearches";
import SearchForm from "../components/SearchForm";


export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <header>
        <SearchForm />
      </header>
      <div className="App-wrapper">  
        <div className="App-main">
          <div className="App-category">
            <TrendingSearches />
          </div>
          <div className="App-results">
            <h3>Last search</h3>
            <ListOfGifs gifs={gifs} />
          </div>
        </div>
      </div>
    </>
  );
}