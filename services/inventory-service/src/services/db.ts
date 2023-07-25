import { Pool, PoolClient } from 'pg';

class PgHelper {
    private static instance: PgHelper;
    pool;
    private constructor(){
        this.pool = new Pool({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || "5432"),
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });

        this.pool.on("error",()=>{
            console.log("error in connecting to client")
        })
    }

    static getClient(): Promise<PoolClient>{
        if(!this.instance.pool){
            throw new Error("cannot get client before init");
        }

        return this.instance.pool.connect();
    }

    static init(){
        if(!this.instance){
            this.instance = new PgHelper();
        }
    }
}



export default PgHelper;