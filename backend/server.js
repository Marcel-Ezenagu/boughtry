import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import data from './product.js';


dotenv.config();

//express setup
const app = express();

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


const URI = `mongodb://marcel:${process.env.DB_PASSWORD}@boughtry-shard-00-00.lhw4l.mongodb.net:27017,boughtry-shard-00-01.lhw4l.mongodb.net:27017,boughtry-shard-00-02.lhw4l.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-9cmu44-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(URI, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB CONNECTED O!!')
})



// server setup

const port = process.env.PORT || 9002

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port} `);
});
