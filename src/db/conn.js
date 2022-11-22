const mongoose=require('mongoose');

const url="mongodb://127.0.0.1:27017/Aviral_Project_College_MERN";
mongoose.connect(url,{
    
}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})