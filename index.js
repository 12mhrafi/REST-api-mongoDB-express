const express  = require("express");
const app = express();
const cors = require("cors");
const config = require("./config/config");
console.log(config)
const useRouter = require("./app");
let PORT = config.app.port;
app.use(useRouter);
app.use(cors);
app.use(express.urlencoded({extended:true}));


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})