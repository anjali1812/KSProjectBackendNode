var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/:product_color',function(req,res,next){
    prod.getProductByColor(req.params.product_color,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;