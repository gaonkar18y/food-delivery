import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import userRouter from './routes/user';

const app = express();
app.use(cors());

app.use(json());

app.use('/user',userRouter);

app.listen(3001, ()=>{
    console.log("Server started on port 3001")
})