import {Redis} from "ioredis"
require("dotenv").config();


const redisClient = () =>{

    if(process.env.REDIS_URL){
        console.log(`Redus connected`)
        return process.env.REDIS_URL
    }

    throw new Error("REdis connection failed")

}

export const redis = new Redis(redisClient())