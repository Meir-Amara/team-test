const express = require('express');
const router = express.Router();

router.get("/aviv",(req,res)=>res.json({name: "aviv adga"}))

module.exports=router