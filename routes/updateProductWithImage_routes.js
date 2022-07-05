var express = require('express');
var router = express.Router();

var updateWithImage=require('../models/product_model');

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

router.put('/',upload.single('product_img'),function(req,res,next){
    //console.log(file.filename);
    updateWithImage.updateProduct_image(req.body,req.file.filename,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;