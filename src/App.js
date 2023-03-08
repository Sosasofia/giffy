import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContexts";
import "./App.css";
import StaticContext from "./context/StaticContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";

function App() {
  return (
    <StaticContext.Provider 
      value={{
        name: "Sofia"
      }}>
      <div className="App">
        <div className="App-content">
          <Link to="/">
            <h1 className="App-logo">GIFFY</h1>
          </Link>

          <GifsContextProvider>
            <Route component={Home} path="/" /> 
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1 className="nes-text is-error">404 ERROR :(</h1>} path="/404" />
          </GifsContextProvider>
        </div>
        <Footer />
      </div>
    </StaticContext.Provider>
  );
}

export default App;
