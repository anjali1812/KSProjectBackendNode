var express = require('express');
var router = express.Router();

var brand=require('../models/brand_model');

router.get('/',function(req,res,next){
    brand.getAllBrand(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:brand_id',function(req,res,next){
    brand.getBrandById(req.params.brand_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});

module.exports=router;