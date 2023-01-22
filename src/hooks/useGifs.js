import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";


export default function useGifs() {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs()
      .then( gifs =>{
        setGifs(gifs);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return { loading, gifs };
}