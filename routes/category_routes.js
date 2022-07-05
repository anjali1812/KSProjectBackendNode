var express = require('express');
var router = express.Router();

var category=require('../models/category_model');

router.get('/',function(req,res,next){
    category.getAllCategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:cat_id',function(req,res,next){
    category.getCatById(req.params.cat_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});

router.post('/',function(req,res,next){
    category.addCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:cat_id',function(req,res,next){
    category.updateCategory(req.params.cat_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });    
});

router.delete('/:cat_id',function(req,res,next){
    category.deleteCategory(req.params.cat_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;