import useGifs from "../hooks/useGifs";
import Spinner from "../components/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import SearchForm from "../components/SearchForm";


export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs } = useGifs({ keyword, rating });

  return <>
    {
      loading
        ? <Spinner />
        : <>
          
          <SearchForm  initialKeyword={keyword} initialRating={rating}/>
            
          <div className="App-wrapper">
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
          </div> 
        </>
    }
  </>;
}