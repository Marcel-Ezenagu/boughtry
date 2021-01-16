import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from 'dotenv';

//import data from './product.js';


dotenv.config();

//express setup
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
});
 

app.get('/api/products', (req, res) => {
    res.send(data.products);
});


app.get('/', (req, res) => {
    res.send('Server is ready');
});


// set up routes

//db setup






const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Serve at ${PORT} `);
});
