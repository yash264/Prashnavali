const express = require("express");
const app = express()
const port = process.env.port || 4000;

app.listen(()=>{
    console.log(`server is running on ${port}`);
})