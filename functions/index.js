const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51HVorEJgrTasCFsrEh7tW1tqcamYu11gRpXsVbACI342FZUJX3eHxK72Xdkuk61h6NuJSucIFzyRZnCVZxR7L2Jn00ucpCkKZP')


//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment recieved BOOM!! for this amount>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: 'usd',
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)