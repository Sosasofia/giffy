import { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
  case "changeKeyword":
    return { ...state, keyword: action.payload};
  case "changeRating":
    return { ...state, rating: action.payload};
  default:
    throw new Error();
  }
};


export default function useForm({ initialKeyword = "", initialRating = "g" } = {}) {
  const initialState = {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  };

  const [{ keyword, rating}, dispatch] = useReducer(reducer, initialState);

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: "changeKeyword", payload: keyword }),
    changeRating: ({ rating }) =>
      dispatch({ type: "changeRating", payload: rating }),
    keyword,
    rating,
  };
}