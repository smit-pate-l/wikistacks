const express = require("express");
const router = express.Router()
const {addPage} = require('../views')

module.exports = router;

router.get('/',(req,res)=>{
    res.send ("root");
})

router.post('/',(req,res)=>{

})

router.get('/add',(req,res)=>{
    res.send(addPage(""))
})