const app = require ('./app');
const dotEnv = require('dotenv');
dotEnv.config({path:"./config.env"});
const PORT = process.env.PORT;


app.listen(PORT,()=>{
console.log("srever run success")
})