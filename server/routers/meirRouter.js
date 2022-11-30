const express = require('express');
const router = express.Router();

router.get("/meir",(req,res)=>res.json({name: "meir amara"}))
router.get("/chen",(req,res)=>res.json({name: "Chen Wassi"}))

module.exports=router