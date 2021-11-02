const moongose=require("mongoose");

const connect_To_DB=async()=> moongose.connect(process.env.MONGODB_URL,{

    useNewUrlParser:true,
  //   useFindAndModify:false,
     useUnifiedTopology:true,
});

module.exports=connect_To_DB;
