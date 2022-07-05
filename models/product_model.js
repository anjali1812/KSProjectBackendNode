var db=require('../dbconn'); 

var product={
    getAllProduct:function(callback){
        return db.query("select * from product_table",callback);
    },

    getProductById:function(product_id,callback){
        return db.query("select * from product_table where product_id=?",[product_id],callback);
    },
    getProductNameOrBrandById:function(product_id,callback){
        return db.query("select p.*,c.*,b.* from product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id and p.product_id=?",[product_id],callback);
    },
    addProduct:function(item,filename,callback){
        var today=Date;
        today=new Date(today.now());
        return db.query("insert into product_table (product_img,fk_cat_id,fk_brand_id,product_qty,product_size,product_color,product_price,fk_user_id,date) values(?,?,?,?,?,?,?,?,?)",[filename,item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,today],callback);
    },

    updateProduct:function(product_id,item,callback){  
        return db.query("update product_table set fk_cat_id=?,fk_brand_id=?,product_qty=?,product_size=?,product_color=?,product_price=?,fk_user_id=? where product_id=?",[item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,product_id],callback);
    },
    updateProduct_image:function(item,filename,callback)
    {
        console.log(item);
        return db.query("update product_table set product_img=?,fk_cat_id=?,fk_brand_id=?,product_qty=?,product_size=?,product_color=?,product_price=?,fk_user_id=? where product_id=?",[filename,item.fk_cat_id,item.fk_brand_id,item.product_qty,item.product_size,item.product_color,item.product_price,item.fk_user_id,item.product_id],callback);
        
    },
    deleteProduct:function(product_id,callback){
        return db.query("delete from product_table where product_id=?",[product_id],callback);
    },

    deleteMultipleProducts:function(item,callback){
        var deleteProductsArray=[];

        for(i=0;i<item.length;i++){
            this.deleteProductsArray[i]=item[i].product_id;
        }

        return db.query("delete from product_table where product_id IN (?)",[deleteProductArray],callback);
    },

    getProductNameOrBrand:function(callback){
        return db.query("select p.*,c.*,b.* from product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id",callback);
    },
    getSmillarProduct:function(fk_cat_id,product_id,callback){
        return db.query("Select * from product_table where fk_cat_id=? And product_id not in (?)",[fk_cat_id,product_id],callback);
    },

    getProductBySize:function(product_size,callback){
        return db.query("select * from product_table where product_size=?",[product_size],callback);
    },

    getProductByColor:function(product_color,callback){
        return db.query("select * from product_table where product_color=?",[product_color],callback);
    },

    getProductByPrice:function(min_price,max_price,callback){
        return db.query("select * from product_table where product_price>? and product_price<?",[min_price,max_price],callback);
    },

    getProductByCity:function(city,callback)
    {
        var msg="Retailer";
        return db.query("select p.*,u.* from product_table p,user_table u where p.fk_user_id=u.email_id And u.user_type not in (?) And u.city=?",[msg,city],callback);
    },
    getShortKurti(callback)
    {
        var num="Short Kurti";
        return db.query("select p.*,c.* from product_table p,category_table c where p.fk_cat_id=c.cat_id and c.cat_name=?",[num],callback);
    },

    getLongKurti(callback)
    {
        var num="Long Kurti";
        return db.query("select p.*,c.* from product_table p,category_table c where p.fk_cat_id=c.cat_id and c.cat_name=?",[num],callback);
    },

    getAnarkaliKurti(callback)
    {
        var num="Anarkali Kurti";
        return db.query("select p.*,c.* from product_table p,category_table c where p.fk_cat_id=c.cat_id and c.cat_name=?",[num],callback);
    },

    getProductNameOrBrandByCat:function(cat_name,callback){
        return db.query("select p.*,c.*,b.* from product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id and c.cat_name=?",[cat_name],callback);
    },

    getProductNameOrBrandByBrand:function(brand_name,callback){
        return db.query("select p.*,c.*,b.* from product_table p,category_table c,brand_table b WHERE p.fk_Cat_id=c.cat_id and p.fk_brand_id=b.brand_id and b.brand_name=?",[brand_name],callback);
    },
   
};

module.exports=product;