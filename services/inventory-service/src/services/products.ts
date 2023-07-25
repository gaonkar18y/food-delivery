import PgHelper from './db';

import { Product, ProductCategory, ProductRequest } from '../models'
import { PoolClient } from 'pg';

export const addProuct= async (product: ProductRequest): Promise<boolean>=>{
    let client: PoolClient|undefined;
    try{
        const { categoryId, name, description, price, imageUrl } = product;
        const values = [categoryId, name, description, price, imageUrl];
        const queryStr = `insert into products (category_id,name,description,price,imageUrl) values ($1,$2,$3,$4,$5);`;
        client = await PgHelper.getClient();
        const res = await client.query(queryStr,values);
        if(res.rowCount === 1){
            return true;
        }else{
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }finally{
        client?.release();
    }
}

export const getAllProducts = async (): Promise<Product[]>=> {
    let client: PoolClient|undefined;
    try{
    const queryStr = 'select * from products limit 20000;';
    client = await PgHelper.getClient();
    const res = await client.query(queryStr);
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
    }catch(err){
        console.log(err);
        return [];
    }finally{
        client?.release();
    }
}

export const getProduct = async (id: number)=> {
    let client: PoolClient|undefined;
    try{
    const queryStr = `select * from products where id=${id};`;
    client = await PgHelper.getClient();
    const res = await client.query(queryStr);
    return res.rows;
    }catch(err){
        console.log(err);
        return [];
    }finally{
        client?.release();
    }
}


export const getAllCategories = async (): Promise<ProductCategory[]>=> {
    const list: ProductCategory[] = [];
    let client: PoolClient|undefined;
    try{
        const queryStr = 'select * from product_category;';
        client = await PgHelper.getClient();
        const res = await client.query(queryStr);
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
        client?.release();
        return list;
    }
}


