import { Link, Route } from "wouter";
import "./App.css";
import { GifsContextProvider } from "./context/GifsContexts";
import StaticContext from "./context/StaticContext";
import Home from "./pages/Home";

function App() {
  return (
    <StaticContext.Provider 
      value={{
        name: "Sofia"
      }}>
      <div className="App">
        <Link to="/">
          <img src={"logo.png"} alt="giffy logo" className="App-logo" aria-label="logo"></img>
        </Link>

        <GifsContextProvider>
          <Route component={Home} path="/" /> 
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
