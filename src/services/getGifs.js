import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    
    return gifs;
  }
  return [];
};

export default async function getGifs({ limit = 12, rating = "g", keyword = "fun", page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;

  const res = await fetch(apiURL);
  const apiResponse = await res.json();
  
  return fromApiResponseToGifs(apiResponse);
}