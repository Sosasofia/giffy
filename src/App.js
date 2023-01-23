import { Link, Route } from "wouter";
import "./App.css";
import { GifsContextProvider } from "./context/GifsContexts";
import StaticContext from "./context/StaticContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

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
          <Route component={Detail} path="/gif/:id" />
          <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
