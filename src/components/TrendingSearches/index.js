import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingTrends from "../../services/getTrendings";


export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTrends().then(setTrends);
  }, []);

  return(
    <div className="lists">
      <h3>Trending Searches</h3>
      <ul className="nes-list is-disc">
        {
          trends.map((trend) => (
            <li key={trend}>
              <Link to={`/search/${trend}` }>{trend}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}