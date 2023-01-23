import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContexts";


export default function useGifs() {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    getGifs()
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
      });
  }, [setGifs]);

  return { loading, gifs };
}