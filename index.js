require("dotenv").config();

const express= require("express");
const { connection } = require("mongoose");

//conncetion
const connnection=require("./connecti");

//model
const userModel=require("./user");




const app=express();

//config
app.use(express.json());



app.get("/",async(req,res)=>{

   const user=await userModel.find();
   return res.json({user});

});


app.get("/user/title/:title",async(req,res)=>{

                      const {title}=req.params;

                      const user=await userModel.find({title:title});

                      if(!user){
                          return res.json({message:"no user found...."});
                      }

                      return res.json({user});

});

app.put("/user/update/:id",async(req,res)=>{
       
    const {id}=req.params;
    const {userData}=req.body;

    const  updateUser=await userModel.findByIdAndUpdate(id,{$set:userData},{new:true});

    return res.json({user: updateUser});

});
// app.put("/user/update/heading/:heading",async(req,res)=>{
       
//     const {heading}=req.params;
//     const {userData}=req.body;

//     const  updateUser=await userModel.findOneAndUpdate(heading,{$set:userData},{new:true});

//     return res.json({user: updateUser});

// });

app.delete("/user/delete/:_id",async(req,res)=>{
    
    const {_id} =req.params;

   // await userModel.findByIdAndDelete(_id);
     
    await userModel.findByIdAndDelete(_id);

    return res.json({message:"user deleted...."});

});


app.post("/user/new",async(req,res)=>{

     const {newUser}=req.body;

     await userModel.create(newUser);

     return res.json({message:"user created...."});
       
});









app.listen(4000,()=> connnection().then((data)=>  console.log("server is runing...",data)).catch((error)=>console.log(error))
);
