var express = require('express');
var router = express.Router();

var sign=require('../models/user_model');

router.get('/:email_id',function(req,res,next){
    sign.getUsersById(req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});

router.post('/',function(req,res,next){
    sign.signup(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;