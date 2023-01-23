import { Link, Route } from "wouter";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img src={"logo.png"} alt="giffy logo" className="App-logo" aria-label="logo"></img>
      </Link>
      <Home />

      <Route component={Home} path="/" />
    </div>
  );
}

export default App;
