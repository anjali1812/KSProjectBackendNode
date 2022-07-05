var express = require('express');
var router = express.Router();

var deleteMultipleUser=require('../models/user_model');

router.post('/',function(req,res,next){
    deleteMultipleUser.deleteMultipleUsers(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows); 
        }
    });
});

module.exports=router;