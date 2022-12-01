const express = require('express');
const router = express.Router();

router.get("/chen",(req,res)=>res.json({name: "Chen  Wassi"}))

module.exports = router  