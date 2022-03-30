const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KEwmNDRbyZ09qZ4lpgTUD3x9C1pNYn1e43zfWNJKjqMUwZojExkCoPGvlJ2m4juGiqFe40G7WCedqgI4tYFEqHW00SL6pn6x1");


// App
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

app.post("/payments/create", async(request, response) => {
    const total = request.query.total;

    console.log(`Payment Recieved successfull: ${total}`);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
exports.api = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });