const mongoose=require('mongoose'); //מביאים את כל המידע מהדטה ביס

const moviesSchema=new mongoose.Schema({

    name:String,
    yearPremiered:String,
    genres:String,
    imageURL:String
},{versionKey:false}
)
module.exports=mongoose.model("movies",moviesSchema) //products זה השם של הטבלה בדטה ביס
