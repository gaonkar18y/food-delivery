import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import multer, {memoryStorage} from 'multer';


import PgHelper from './services/db'
import productsRouter from './routes/products';
import { initServices } from './di/initServices';

config();

initServices();

const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded());

const mul = multer({
    storage: memoryStorage()
})

app.use('/public', express.static('public'));

app.use('/product', mul.single('file') , productsRouter);

app.listen(3001, ()=>{
    PgHelper.init();
    console.log("Server started on port 3001")
})