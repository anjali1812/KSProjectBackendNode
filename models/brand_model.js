var db=require('../dbconn'); 

var brand={

    getAllBrand:function(callback){
        return db.query("Select * from brand_table",callback);
    },

    getBrandById:function(brand_id,callback){
        return db.query("select brand_name from brand_table where brand_id=?",[brand_id],callback);
    }
}

module.exports=brand;