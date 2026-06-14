let bookingModel = require("../models/bookingModel");
let addBooking = (req,res)=>{
    let obj ={
        name :req.body.name,
        event:req.body.event,
        time :req.body.time,
        phone:req.body.phone
    
    }
    bookingModel.addBooking(obj,res);
}
let getAllBooking =(req,res)=>
{
    bookingModel.getAllBooking(res);
}
let updateBooking=(req,res)=>
{
    bookingModel.updateBooking(req.params.id,req.body,res);

}
let deleteBooking=(req,res)=>
{
    bookingModel.deleteBooking(req.params.id, res);
}

module.exports={addBooking,getAllBooking,updateBooking ,deleteBooking}

