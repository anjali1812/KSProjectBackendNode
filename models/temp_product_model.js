var db=require('../dbconn'); 

var product={
    getAllTempProduct:function(callback){
        return db.query("select * from temp_product_table",callback);
    },
    
    addProduct:function(item,callback){
        var today=Date;
        today=new Date(today.now());
        return db.query("insert into product_table (product_img,fk_cat_id,fk_brand_id,product_qty,product_size,product_color,product_price,fk_user_id,date) values(?,?,?,?,?,?,?,?,?)",[item.product_img,item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,today],callback);
    },

    getTempProductNameOrBrand:function(callback){
        return db.query("select p.*,c.*,b.* from temp_product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id",callback);
    },
 
};

module.exports=product;