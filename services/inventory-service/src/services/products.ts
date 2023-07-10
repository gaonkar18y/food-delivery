import client from './db';

export const addProucts= async (): Promise<any>=>{
    for(let i=2;i<1000000;i++){
        const name=`product no ${i}`;
        const desc=`product no ${i} is good`;
        const price=2*i;
        const queryStr = `insert into products (category_id,name,description,price) values (1,'${name}','${desc}',${price});`;
        client.query(queryStr);
    }

    return [];
}

export const getAllProducts = async ()=> {
    const queryStr = 'select * from products limit 20000;';
    const res = await client.query(queryStr);
    return res.rows;
}