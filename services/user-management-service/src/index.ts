import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';

import userRouter from './routes/user';
import PgHelper from './services/db';

config();

const app = express();
app.use(cors());

app.use(json());

app.use('/users',userRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Server started on port "+process.env.PORT);
    PgHelper.init();
})