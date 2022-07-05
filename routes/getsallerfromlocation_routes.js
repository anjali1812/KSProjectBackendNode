var express = require('express');
var router = express.Router();

var prod=require('../models/product_model');

router.get('/:city',function(req,res,next){
    prod.getSellerFronLocation(req.params.city,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;