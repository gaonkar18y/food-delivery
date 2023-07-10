import { Router } from 'express';

import { getAllOrders } from '../services/orders';

const router = Router();


router.get('/all/:userId', async (req, res, next)=>{
    const productsList = await getAllOrders(req.params.userId);
    res.send(productsList);
});

export default router;