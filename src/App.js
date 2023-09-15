import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
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
              <Header />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
