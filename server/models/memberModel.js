const mongoose=require('mongoose'); //מביאים את כל המידע מהדטה ביס

const membersSchema=new mongoose.Schema({

    fullName:String,
    email:String,
    city:String,
},{versionKey:false}
)
module.exports=mongoose.model("members",membersSchema) //products זה השם של הטבלה בדטה ביס
