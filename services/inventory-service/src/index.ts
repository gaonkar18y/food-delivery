import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import multer, {diskStorage} from 'multer';
import { v4 } from 'uuid';

import PgHelper from './services/db'
import productsRouter from './routes/products';

config();

const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded());

const mul = multer({
    storage: diskStorage({
        destination:(req,file, cb)=> cb(null, 'public'),
        filename(req, file, cb) {
            let name = `${v4()}-${Date.now()}.${file.mimetype.split('/')[1]}`
            cb(null, name);
        },
    })
})

app.use('/public', express.static('public'));

app.use('/product', mul.single('file') , productsRouter);

app.listen(3001, ()=>{
    PgHelper.init();
    console.log("Server started on port 3001")
})