const express = require('express');
const router = express.Router();

router.get("/amir",(req,res)=>res.json({name: "amir nagat"}))

module.exports=router