import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";


dotenv.config();

//express setup
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//api routes setup
/* 
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
});
 */ 


app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

//db setup
   
const URI = `mongodb://marcel:${process.env.DB_PASSWORD}@cluster0-shard-00-00.fkta9.mongodb.net:27017,cluster0-shard-00-01.fkta9.mongodb.net:27017,cluster0-shard-00-02.fkta9.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-v9mvia-shard-0&authSource=admin&retryWrites=true&w=majority`
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
