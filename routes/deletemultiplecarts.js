var express = require('express');
var router = express.Router();

var deleteMultiplecart=require('../models/cart_model');

router.post('/',function(req,res,next){
console.log("hii in routes");
    deleteMultiplecart.deleteMultiplecarts(req.body,function(err,rows){
        // console.log(body);
        if(err){
            console.log("error");
            res.json(err);
        }
        else{
            console.log("res");
            res.json(rows); 
        }
    });
});

module.exports=router;