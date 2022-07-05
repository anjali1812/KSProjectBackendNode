var express = require('express');
var router = express.Router();
var users=require('../models/user_model');

router.get('/',function(req,res,next){
    users.getAllUsers(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:email_id',function(req,res,next){
    users.deleteUser(req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:email_id',function(req,res,next){
    users.updateUser(req.params.email_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });    
});

module.exports=router;