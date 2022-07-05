var express = require('express');
var router = express.Router();

var prod=require('../models/temp_product_model');

router.get('/',function(req,res,next){
    prod.getTempProductNameOrBrand(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;