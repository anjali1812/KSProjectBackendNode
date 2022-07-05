var express = require('express');
var router = express.Router();

var billdetails=require('../models/bill_details_model');

router.get('/',function(req,res,next){
    billdetails.getAllBillDetails(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    billdetails.addbilldetails(req.body,function(err,rows){
        if(err)
      {
      res.json(err);
      }
      else{
          console.log(rows.bill_no);
      res.json(rows);
      }
    })
 })

module.exports=router;