import PgHelper from './db';

import { ProductRequest } from '../models'

export const addProuct= async (product: ProductRequest): Promise<any>=>{
    const { categoryId, name, description, price } = product;
    const queryStr = `insert into products (category_id,name,description,price) values (${categoryId},'${name}','${description}',${price});`;
    const res = await PgHelper.getClient().query(queryStr);
    return res;
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

