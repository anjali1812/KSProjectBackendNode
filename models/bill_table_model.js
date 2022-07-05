var db=require('../dbconn'); 

var bill={
    getAllBill:function(callback){
        return db.query("select * from bill_table",callback);
    },
    getComissonOfWhol:function(callback){
        var msg="Wholesaler";
        return db.query("select p.*,u.* from product_table p,user_table u where p.fk_user_id=u.email_id And u.user_type=?",[msg],callback);
    }, 
    addbill:function(item,callback){
        var today=new Date();

        return db.query('insert into bill_table (bill_amt,fk_user_id,date) values(?,?,?)',[item.bill_amt,item.fk_user_id,today],callback);
    }
}
module.exports=bill;  