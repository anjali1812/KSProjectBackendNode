var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/:brand_name',function(req,res,next){
    prod.getProductNameOrBrandByBrand(req.params.brand_name,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;