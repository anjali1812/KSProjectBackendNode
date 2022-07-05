var express = require('express');
var router = express.Router();

var prod=require('../models/temp_product_model');

var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/kurti_images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
var upload = multer({storage: storage});


router.get('/',function(req,res,next){
    prod.getAllTempProduct(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){   //add the tasks
    console.log(req.body);
    prod.addProduct(req.body,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(req.body);//or retun count for 1 &amp;amp;amp; 0
      }
      });
});


module.exports=router;
