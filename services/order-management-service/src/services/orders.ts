import client from './db';

export const getAllOrders = async (userId: string)=> {
    const queryStr = `select * from orders where user_id="${userId}"`;
    const res = await client.query(queryStr);
    return res.rows;
}