import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';


import productsRouter from './routes/orders';

const app = express();
app.use(cors());

app.use(json());

app.use('/orders',productsRouter);

app.listen(3001, ()=>{
    console.log("Server started on port 3001")
})