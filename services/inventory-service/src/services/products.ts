import PgHelper from './db';

import { ProductRequest } from '../models'

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

export const getAllProducts = async ()=> {
    const queryStr = 'select * from products limit 20000;';
    const res = await PgHelper.getClient().query(queryStr);
    return res.rows;
}

export const getProduct = async (id: number)=> {
    const queryStr = `select * from products where id=${id};`;
    const res = await PgHelper.getClient().query(queryStr);
    return res.rows;
}

