var db=require('../dbconn'); 

var products={

    getProductById:function(product_id,callback){
        return db.query("select * from temp_product_table where product_id=?",[product_id],callback);
    },

    getProductByUserId:function(fk_user_id,callback){
        return db.query("select * from temp_product_table where fk_user_id=?",[fk_user_id],callback);
    },

    getProductNameAndBrand:function(fk_user_id,callback){
        return db.query("select p.*,c.*,b.* from product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id and p.fk_user_id=?",[fk_user_id],callback);
    },

    addWholesalerProduct:function(item,filename,callback){
        var today=Date;
        today=new Date(today.now());
        return db.query("insert into temp_product_table (product_img,fk_cat_id,fk_brand_id,product_qty,product_size,product_color,product_price,fk_user_id,date) values(?,?,?,?,?,?,?,?,?)",[filename,item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,today],callback);
    },

    updateProduct:function(product_id,item,callback){  
        return db.query("update product_table set fk_cat_id=?,fk_brand_id=?,product_qty=?,product_size=?,product_color=?,product_price=?,fk_user_id=? where product_id=?",[item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,product_id],callback);
    },
    updateProduct_image:function(item,filename,callback)
    {
        return db.query("update product_table set product_img=?,fk_cat_id=?,fk_brand_id=?,product_qty=?,product_size=?,product_color=?,product_price=?,fk_user_id=? where product_id=?",[filename,item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,item.product_id],callback);      
    },

    wholsallingpro:function(email_id,callback)
    {
        return db.query("select p.*,b.*,c.* from product_table p,bill_details_table b,category_table c where p.product_id=b.fk_product_id And c.cat_id=p.fk_cat_id And p.fk_user_id=?",[email_id],callback);
    }

}

module.exports=products;  