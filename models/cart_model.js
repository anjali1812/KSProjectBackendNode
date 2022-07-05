var db=require('../dbconn'); 

var cart={
    getAllItems:function(callback){
        return db.query("select * from cart_tbl",callback);
    },

    getByUserId:function(user_id,callback){
        return db.query("select * from cart_tbl where fk_user_id=?",[user_id],callback);
    },

    addToCart:function(item,callback){
        return db.query("insert into cart_tbl(fk_user_id,fk_product_id,product_img,product_name,product_price,product_qty) values(?,?,?,?,?,?)",[item.fk_user_id,item.fk_product_id,item.product_img,item.product_name,item.product_price,item.product_qty],callback);
    },

    deleteFromCart:function(cart_id,callback){
        return db.query("delete from cart_tbl where cart_id=?",[cart_id],callback);
    },
    
    deleteMultiplecarts:function(item,callback){
        console.log("hii");
        var deletecartArray=[];
        var delCart=[];

        for(i=0;i<item.length;i++){

            // this.deletecartArray[i]=item[i].fk_user_id;
            delCart[i]=item[i].fk_user_id;
            console.log(delCart[i]);
        }
        // console.log(this.deletecartArray+"cart array");

        return db.query("delete from cart_tbl where fk_user_id IN (?)",[delCart],callback);
    },
};

module.exports=cart;