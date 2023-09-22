import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/DataLayer/Firebase";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";
import { useStateValue } from "./components/DataLayer/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    console.log("printing");
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_user",
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
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
