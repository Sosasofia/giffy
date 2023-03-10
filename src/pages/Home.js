import React from "react";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";


export default function Home() {
  const { gifs, setPage } = useGifs();
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

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
            <button className="nes-btn" onClick={handleNextPage}>Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}