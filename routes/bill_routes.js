var express = require('express');
var router = express.Router();

var bill=require('../models/bill_table_model');

router.get('/',function(req,res,next){
    bill.getAllBill(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    bill.addbill(req.body,function(err,rows){
        if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);
      }
    });
 });
module.exports=router;