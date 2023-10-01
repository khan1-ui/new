const express = require('express');
const useRouter = require('./src/routes/api');
const app = new express();
app.use("/ass",useRouter);
app.use("*",(req,res)=>{
    res.status(404).json({
        status:"Failed",data:"Server Url Not Found !"
    })
});
module.exports = app;