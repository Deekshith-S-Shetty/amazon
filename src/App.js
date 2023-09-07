import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
