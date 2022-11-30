const express = require('express');
const router = express.Router();

router.get("/meir",(req,res)=>res.json("is meir"))

module.exports=router