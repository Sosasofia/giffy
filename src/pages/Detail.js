import { Redirect, Link } from "wouter";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import useSingleGif from "../hooks/useSingleGif";


export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <div className="App-detail">
      <h3 className="nes-text is-primary">{gif.title}</h3>
      <Gif {...gif} />
      <Link className="nes-btn Detail-buttton" to="/">Go back</Link>
    </div>
  );
}