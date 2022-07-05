var express = require('express');
var router = express.Router();

var cart=require('../models/cart_model');

router.get('/',function(req,res,next){
    cart.getAllItems(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.get('/:user_id',function(req,res,next){
    cart.getByUserId(req.params.user_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});

router.post('/',function(req,res,next){
    cart.addToCart(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:cart_id',function(req,res,next){
    cart.deleteFromCart(req.params.cart_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;