import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';


import productsRouter from './routes/products';

const app = express();
app.use(cors());

app.use(json());

app.use('/product',productsRouter);

app.listen(3001, ()=>{
    console.log("Server started on port 3001")
})