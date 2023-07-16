import { Pool } from 'pg';

class PgHelper {
    private static instance: PgHelper;
    client;
    private constructor(){
        this.client = new Pool({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || "5432"),
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });


        this.client.connect();

        this.client.on("error",()=>{
            console.log("error in connecting to client")
        })
    }

    static getClient(){
        if(!this.instance.client){
            throw new Error("cannot get client before init");
        }

        if(!this.instance.client){
            throw new Error("client is not connected");
        }
        return this.instance.client;
    }

    static init(){
        if(!this.instance){
            this.instance = new PgHelper();
        }
    }
}



export default PgHelper;