const express = require('express');

const router =express.Router()
router.get('/wubet',(req,res)=>res.json({name:"wubet zemele"}))

module.exports = router