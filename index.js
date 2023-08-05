const express  = require("express");
const app = express();
const cors = require("cors");
const useRouter = require("./app");
const PORT = 3000;
app.use(useRouter);
app.use(cors);
app.use(express.urlencoded({extended:true}))
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})