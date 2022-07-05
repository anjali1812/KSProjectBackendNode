var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/:min_price/:max_price',function(req,res,next){
    prod.getProductByPrice(req.params.min_price,req.params.max_price,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;