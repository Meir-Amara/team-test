const express = require('express');

const router =express.Router()
router.get('/wubet',(req,res)=>res.json({name:"wubet"}))

module.exports = router