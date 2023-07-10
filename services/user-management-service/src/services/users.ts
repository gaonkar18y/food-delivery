import client from './db';

export const getUsers= async (): Promise<any>=>{
    const res= await client.query("select * from users;");
    return res.rows;
}

