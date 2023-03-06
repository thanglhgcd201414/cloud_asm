var express = require('express');
var router = express.Router();

//login page
router.get('/', (req,res)=>{
    res.render('login', { message:"Please input your credential!"});
})

module.exports = router; 


