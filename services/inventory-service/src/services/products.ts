import PgHelper from './db';

import { Product, ProductCategory, ProductRequest } from '../models'

export const addProuct= async (product: ProductRequest): Promise<boolean>=>{
    try{
        const { categoryId, name, description, price, imageUrl } = product;
        const values = [categoryId, name, description, price, imageUrl];
        const queryStr = `insert into products (category_id,name,description,price,imageUrl) values ($1,$2,$3,$4,$5);`;
        const res = await PgHelper.getClient().query(queryStr,values);
        if(res.rowCount === 1){
            return true;
        }else{
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

export const getAllProducts = async (): Promise<Product[]>=> {
    const queryStr = 'select * from products limit 20000;';
    const res = await PgHelper.getClient().query(queryStr);
    const list: Product[] = [];
    for(let p of res.rows){
       list.push({
        name: p.name,
        description: p.description,
        imageUrl: p.imageurl,
        id: p.id,
        categoryId: p.categoryid,
        price: p.price
       })
    }
    return list;
}

export const getProduct = async (id: number)=> {
    const queryStr = `select * from products where id=${id};`;
    const res = await PgHelper.getClient().query(queryStr);
    return res.rows;
}


export const getAllCategories = async (): Promise<ProductCategory[]>=> {
    const list: ProductCategory[] = [];
    try{
        const queryStr = 'select * from product_category;';
        const res = await PgHelper.getClient().query(queryStr);
        for(let p of res.rows){
           list.push({
            name: p.name,
            description: p.description,
            id: p.id
           })
        }
        return list;
    }catch(err){
        console.log(err);  
    }finally{
        return list;
    }
}


