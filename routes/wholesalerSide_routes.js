var express = require('express');
var router = express.Router();
var product=require('../models/wholesalerSide_model');

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

router.get('/:fk_user_id',function(req,res,next){
    product.getProductNameAndBrand(req.params.fk_user_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }        
    });
});

router.post('/',upload.single('product_img'),function(req,res,next){   //add the tasks
 
    product.addWholesalerProduct(req.body,req.file.filename,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(req.body);//or retun count for 1 &amp;amp;amp; 0
      }
      });
});


router.put('/:product_id',function(req,res,next){
    product.updateProduct(req.params.product_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });    
});

module.exports=router;