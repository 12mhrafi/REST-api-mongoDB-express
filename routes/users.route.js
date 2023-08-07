const express = require("express");
const { getAllUsers, getUpdateUsers, getOneUser, getCreateUsers, getDeleteUsers } = require("../controllers/users.controller");
const router = express.Router();


router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/../views/index.html");
})

// api/users/ : GET
// api/users/:id : GET
// api/users/: POST
// api/users/:id : PATCH
// api/users:id : DELETE

router.get("/allusers",getAllUsers)
router.post("/create/",getCreateUsers)
router.get("/allusers",getOneUser)
router.put("/update/",getUpdateUsers)
router.delete("/delete/",getDeleteUsers)







//route not found
router.get("*", (req,res,next)=>{
    res.status(500).json({
        message:"sever error!"
    })
})

//server not found
router.get("*", (req,res,next)=>{
    res.status(500).json({
        message:"sever error!"
    })
})

module.exports = router;