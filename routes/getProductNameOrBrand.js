var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/',function(req,res,next){
    prod.getProductNameOrBrand(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:product_id',function(req,res,next){
    prod.getProductNameOrBrandById(req.params.product_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});
module.exports=router;