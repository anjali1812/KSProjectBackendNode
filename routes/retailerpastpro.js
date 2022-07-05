var express = require('express');
var router = express.Router();

var prod=require('../models/bill_details_model');

router.get('/:email_id',function(req,res,next){
    prod.retailerPastOrders(req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;