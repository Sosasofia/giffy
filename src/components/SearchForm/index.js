import { memo } from "react";
import { useLocation } from "wouter";
import useForm from "hooks/useForm";
import "./style.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0]}) {
  
  const [_, pushLocation] = useLocation();
  const { keyword, rating, changeKeyword, changeRating } = useForm({ initialKeyword, initialRating });


  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
          className="nes-input"
        />
        <div className="nes-select select">
          <select onChange={handleChangeRating} >
            <option disabled>Rating type</option>
            {RATINGS.map((rating) => (
              <option key={rating}>{rating}</option>
            ))}
          </select>
        </div>
      </div>
      
      <button className="nes-btn is-primary">Search</button>
    </form>
  );
}

export default memo(SearchForm);