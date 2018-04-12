const router=require('express').Router();
const jwt=require('jsonwebtoken');
const user=require('../models/user');

router.post('/signup',(req,res,next)=>{
    console.log(res.json);
});
module.exports=router;
//body-parser is a library to read data from front end