import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContexts";


export default function useGifs({ keyword, rating } = { keyword: null}) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        if(keyword) {
          localStorage.setItem("lastKeyword", keyword);
        }
      });
  }, [setGifs, keyword, keywordToUse, rating]);

  return { loading, gifs };
}