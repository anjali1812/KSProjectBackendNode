var express = require('express');
var router = express.Router();

var billdetails=require('../models/bill_details_model');

router.get('/:bill_no',function(req,res,next){
    billdetails.getBillDetailsByBillId(req.params.bill_no,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;