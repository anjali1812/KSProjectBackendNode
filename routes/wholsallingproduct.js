var express = require('express');
var router = express.Router();

var prod=require('../models/wholesalerSide_model');

router.get('/:email_id',function(req,res,next){
    prod.wholsallingpro(req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});


module.exports=router;