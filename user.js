const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
      
      image_url:String,
      title:String,
      content:String,
      heading:String,


});

const userModel=mongoose.model("User",userSchema);
module.exports=userModel;