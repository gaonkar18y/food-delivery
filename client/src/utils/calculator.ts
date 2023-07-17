import { Product } from "../models/product";

export const totalPrice = (products: Product[]): number=> products.reduce((acc, p)=> acc+p.price,0);