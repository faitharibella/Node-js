const express = require("express");
const router = express.Router();

router.get('/stock-reg',(req,res)=>{
    res.render('stock-reg')
})
router.post('/stockreg',(req,res)=>{
    console.log('formdata recieved')
    console.log(req.body)
})





module.exports = router