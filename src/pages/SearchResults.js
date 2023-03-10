import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";


export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

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
          <h3>
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
    }
  </>;
}