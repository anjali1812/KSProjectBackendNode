var express = require('express');
var router = express.Router();

var bill=require('../models/bill_table_model');

router.get('/',function(req,res,next){
    bill.getComissonOfWhol(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;