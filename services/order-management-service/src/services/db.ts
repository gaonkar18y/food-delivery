import { Client } from 'pg';

const client = new Client({
    host:"localhost",
    database:"ecomexample",
    port: 5432,
    user:"yogeshgaonkar",
    password: "rootUser"
});

client.connect();

client.on("error",()=>{
    console.log("error in connecting to client")
})


export default client;