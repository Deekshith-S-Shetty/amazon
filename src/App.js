import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <Header />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
