import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';


dotenv.config();

//express setup
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



// set up routes
app.use('/api/users', userRouter );

//db setup

const mongoURI = 'mongodb+srv://marcel:8rE8cF0EuhhRiQaM@cluster0.0o9pk.mongodb.net/Cluster0?retryWrites=true&w=majority';

const option = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true   
};

mongoose.connect(mongoURI, option);

console.log("db is connecTED")





const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT} `)
});
