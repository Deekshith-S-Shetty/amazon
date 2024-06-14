import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/DataLayer/Firebase";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./components/DataLayer/StateProvider";
import "./App.css";

const promise = loadStripe(
  "pk_test_51Mj0qPSJWSrI7pZGhuLURDsoh5ExLsIsqtifEXkZIemhuKYKuACkG3jWlgDqIZla4532KobXrGB8G1ESiiuDhk8X00YNylCQw1"
);

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
              <Footer />
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
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
