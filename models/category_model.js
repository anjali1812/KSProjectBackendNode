var db=require('../dbconn'); 

var category={
    getAllCategory:function(callback){
        return db.query("select * from category_table",callback);
    },

    getCatById:function(cat_id,callback){
        return db.query("select * from category_table where cat_id=?",[cat_id],callback);
    },

    addCategory:function(item,callback)
    {
        return db.query('insert into category_table (cat_name) values(?)',[item.cat_name],callback);
    },
    updateCategory:function(cat_id,item,callback){
        return db.query("update category_table set cat_name=? where cat_id=?",[item.cat_name,cat_id],callback);
    },
    
    deleteCategory:function(cat_id,callback){
        return db.query('delete from category_table where cat_id=?',[cat_id],callback);
    }
}

module.exports=category;