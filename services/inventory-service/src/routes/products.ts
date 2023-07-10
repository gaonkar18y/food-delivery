import { Router } from 'express';

import { addProucts, getAllProducts } from '../services/products';

const router = Router();

router.post('/all',async (req, res, next)=>{
    const data = await addProucts();
    res.send({
        data
    })
})

router.get('/all', async (req, res, next)=>{
    const productsList = await getAllProducts();
    res.send(productsList);
});

export default router;