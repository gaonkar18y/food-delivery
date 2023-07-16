import { Router } from 'express';

import { addProuct, getAllProducts, getProduct } from '../services/products';
import { ProductRequest } from '../models';

const router = Router();

router.post('/',async (req, res, next)=>{
    const product: ProductRequest = req.body;
    const data = await addProuct(product);
    res.send({ data })
})

router.get('/all', async (req, res, next)=>{
    try{
        const productsList = await getAllProducts();
        res.send(productsList);
    }catch(err){
        console.log(err);
        res.status(500).send("Error in fetching products, please try after some time")
    }
   
});

router.get('/:id', async (req, res, next)=>{
    const id: number = parseInt(req.params.id);
    const productsList = await getProduct(id);
    res.send(productsList[0]);
});



export default router;