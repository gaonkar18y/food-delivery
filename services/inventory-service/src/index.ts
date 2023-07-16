import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';

import PgHelper from './services/db'
import productsRouter from './routes/products';

config();

const app = express();
app.use(cors());

app.use(json());

app.use('/product',productsRouter);

app.listen(3001, ()=>{
    PgHelper.init();
    console.log("Server started on port 3001")
})