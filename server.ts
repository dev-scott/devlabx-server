import { app } from "./app";
import connectDb from "./utils/db";

require("dotenv").config();

app.listen(process.env.PORT , ()=>{
    console.log("listening on port " + process.env.PORT)
    connectDb()
    
})