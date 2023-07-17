import { Product } from "../models/product";

export const createProduct = (p: Partial<Product>): Product=>{
    return {
        name: "testProduct",
        description: "test product description",
        price: 100,
        id: Math.random()*100,
        ...p
    }
}
