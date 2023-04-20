import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import useSEO from "hooks/useSEO";
import SearchForm from "components/SearchForm";


export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const title = gifs ? `Resultados de ${keyword}` : "";
  useSEO({ title, description: `Gifs about ${keyword}` });

  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage]);

  useEffect(() => {
    if(isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return <>
    {
      loading
        ? <Spinner />
        : <>
          <header>
            <SearchForm />
          </header>
          <h3>
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
    }
  </>;
}