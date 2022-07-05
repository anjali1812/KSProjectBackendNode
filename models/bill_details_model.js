var db=require('../dbconn'); 

var billdetails={
    getAllBillDetails:function(callback){
        return db.query("select * from bill_details_table",callback);
    },

    getBillDetailsByBillId:function(bill_no,callback){
        return db.query("select b.*,bd.* from bill_table b,bill_details_table bd WHERE b.bill_no=bd.fk_bill_no AND b.bill_no=?",[bill_no],callback);
    },
    
    addbilldetails:function(item,callback){
        var value=[];
        for(let i=0;i<item.length;i++)
        {
            value[i]=[item[i].fk_bill_amt,item[i].fk_product_id,item[i].purchase_pro_qty,item[i].fk_bill_no];
        }
        console.log(value);
        return db.query('insert into bill_details_table (fk_bill_amt,fk_product_id,purchase_pro_qty,fk_bill_no) values  ?',[value],callback)
    },
    
    retailerPastOrders:function(email_id,callback)
    {
        return db.query("select p.*,bd.*,b.*,c.* from product_table p,bill_details_table bd,bill_table b,category_table c where p.product_id=bd.fk_product_id And c.cat_id=p.fk_cat_id And bd.fk_bill_no=b.bill_no And b.fk_user_id=?",[email_id],callback);
    }

}
module.exports=billdetails;  