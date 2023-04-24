import { useEffect, useState } from "react";
import { Link } from "wouter";
import "./style.css";
import getTrendingTrends from "services/getTrendings";


export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTrends().then(setTrends);
  }, []);

  return(
    <section className="lists">
      <h3 className="nes-text is-primary">Trending</h3>
      <ul className="nes-list is-disc">
        {
          trends.map((trend) => (
            <li key={trend}>
              <Link to={`/search/${trend}` } className="Category-link">{trend}</Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}