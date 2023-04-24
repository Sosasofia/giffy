import React from "react";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import LazyTrending from "components/TrendingSearches";
import SearchForm from "components/SearchForm";


export default function Home() {
  const { gifs, setPage } = useGifs({limit: 12});
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <header>
        <SearchForm />
      </header>
      <div className="App-main">
        <div className="App-category">
          <LazyTrending />
        </div>
        <div className="App-results">
          <h3>Last search</h3>
          <ListOfGifs gifs={gifs} />
          <button className="nes-btn btn" onClick={handleNextPage}>Load More</button>
        </div>
      </div>
    </>
  );
}