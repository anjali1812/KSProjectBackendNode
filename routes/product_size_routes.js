var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/:product_size',function(req,res,next){
    prod.getProductBySize(req.params.product_size,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;