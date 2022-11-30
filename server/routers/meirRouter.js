const express = require('express');
const router = express.Router();

router.get("/meir",(req,res)=>res.json({name:"meir"}))

module.exports=router