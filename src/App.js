import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/DataLayer/Firebase";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Payment from "./components/Payment";
import "./App.css";
import { useStateValue } from "./components/DataLayer/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser?.email);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
        <Route
          exact
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
