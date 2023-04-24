import { useContext, useState, useEffect } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContexts";

const INITIAL_PAGE = 0;

export default function useGifs({ limit, keyword, rating } = { keyword: null}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  const [ page, setPage] = useState(INITIAL_PAGE);


  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating, limit })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        if(keyword) {
          localStorage.setItem("lastKeyword", keyword);
        }
      });
  }, [setGifs, keyword, keywordToUse, rating, limit]);

  useEffect(() => {
    if(page === INITIAL_PAGE) return;
    setLoadingNextPage(true);

    getGifs({keyword: keywordToUse, rating, page,limit})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
  }, [page, keywordToUse, setGifs, rating,limit]);

  return { loading, gifs, setPage, loadingNextPage };
}