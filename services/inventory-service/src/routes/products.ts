import { Router } from 'express';

import { addProuct, getAllCategories, getAllProducts, getProduct } from '../services/products';
import { ProductRequest } from '../models';

const router = Router();

router.post('/',async (req, res, next)=>{
    const { categoryId, name, description, price } = req.body;
    let imageUrl = req.file?.filename;
    if(!imageUrl){
        res.status(400).send({message: "Product image is required."})
        return;
    }
    const basePath = `${req.protocol}://${req.get("host")}/public/`;
    imageUrl= basePath+imageUrl;
    const product: ProductRequest = {
        categoryId: parseInt(categoryId), name, description, price: parseInt(price), imageUrl
    };
    const result = await addProuct(product);
    if(result){
        res.send({ message: "product created successfully" })
    }else{
        res.send({ message: "Did not create product" })
    }
    
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

router.get('/categories', async (req, res, next)=>{
    const list = await getAllCategories();
    res.send(list);
});

router.get('/:id', async (req, res, next)=>{
    const id: number = parseInt(req.params.id);
    const productsList = await getProduct(id);
    res.send(productsList[0]);
});



export default router;