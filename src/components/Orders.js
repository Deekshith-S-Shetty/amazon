import React, { useEffect, useState } from "react";
import { useStateValue } from "./DataLayer/StateProvider";
import { db } from "./DataLayer/Firebase";
import Order from "./Order";
import "./Orders.css";

export default function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="all-orders">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}
