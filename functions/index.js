const functions = require("firebase-functions");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const stripe = require("stripe")(process.env.STRIPE_KEY);

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  const total = Math.round(req.query.total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
