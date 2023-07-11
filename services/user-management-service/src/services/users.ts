import { LoginRequest, UserRequest } from '../models/requests';
import PgHelper from './db';

export const createUser = async (user: UserRequest): Promise<any>=>{
    const { firstName, lastName, email, pass} = user;
    const query = `insert into users(firstname,lastname,email,pass) values('${firstName}','${lastName}','${email}','${pass}');`
    const res = await PgHelper.getClient().query(query);
    return res;
}

export const getUserWithPassword = async (user: LoginRequest): Promise<any[]>=>{
    const { email, pass} = user;
    const res = await PgHelper.getClient().query(`select * from users where email='${email}' and pass='${pass}';`);
    return res.rows;
}
