const mongoose=require('mongoose'); //מביאים את כל המידע מהדטה ביס

const userSchema=new mongoose.Schema({

    fullName:String,
    username:String,
    password:String,
    role:String
},{versionKey:false}
)
module.exports=mongoose.model("users",userSchema) //products זה השם של הטבלה בדטה ביס
