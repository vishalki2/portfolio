const mongoose =require("mongoose");
const User  = require("./model");

const express = require("express");
const cors=require("cors");
const { response } = require("express");
const { Router } = require("react-router-dom");
const app=express();
const PORT=8080;
app.use(cors());

app.get('/',(req,res)=>{   
 res.status(200).json({msg:"welcome"});
})


app.listen(PORT,()=> {
  console.log(`server at ${PORT}`);

});


mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
// 1. login page query 
app.get("/login",async (req,res)=>{
const userid=req.query.userid;
console.log(userid);
const user=await User.findOne({userid});
console.log(user);

if(user)
{
  res.status(200).json(user);
  

} else {
    res.status(404).json({error: "user not found"});

}

});
//2. lineman creation page query 
app.post("/Lineman",async(req,res)=>{
   const userid=req.query.userid;
  const role=req.query.role;
  const fname=req.query.fname;
  const lname=req.query.lname;
  const age=req.query.age;
  const email=req.query.email;
  const password=req.query.password;
  const user = new User({
    
    userid: userid,
    role : role,
    fName: fname,
    lName: lname,
    age:age,
    email:email,
    password: password,
  });
  user
  .save()
  .then(() => {
    console.log("Lineman created successfully");
    
  })
  .catch((err) => {
    console.log(err);
  });
})

// 3. delete lineman query working 
app.get("/DelLineman",async (req,res)=>{
  const userid=req.query.userid;
   User
  .deleteOne({userid :userid})
  
  .then(()=>{
    console.log("Lineman Deleted ");
    res.status(200).json({userid});
  })
  .catch((err)=>{
   
    console.log(err);

  })
   
//4. show lineman data according to je 
const express=require("express");
const router=e.Router();
const cors=require("cors");
const mongoose =require("mongoose");
app.use(cors())
app.use(express.json());
mongoose.connect("mongodb://localhost:27017")
app.use("/",require("/=./routes/Linemanpage"))
app.listen(3001,function(){
console.log("express server is runnung on port 3001")
})

})