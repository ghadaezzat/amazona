const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const bcrypt=require('bcrypt-nodejs');

const config=require('./config');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//morgan will log all our requests in the terminal
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(config.database,err=>{
    if (err){
        console.log(err);
    }else{
        console.log('connected to database');
    }
})
/*app.get('/',(req,res,next) =>{
    res.json({
        user:'ghada ezzat'
    }
        
    )
})*/
const userRoutes=require('./routes/account');

app.listen(config.port,(err)=>{
    console.log(config.port );
});