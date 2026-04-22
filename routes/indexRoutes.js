const express = require("express");
const router = express.Router();

//Get index page
router.get('/',(req,res)=>{
    res.render('index1')
})

router.get('/stockform',(req,res)=>{
    res.render('addstock')
})

module.exports = router;