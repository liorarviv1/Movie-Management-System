const mongoose=require('mongoose'); //מביאים את כל המידע מהדטה ביס

const subscriptionsSchema=new mongoose.Schema({

    memberId:String,
    // dataMemberById:Array,

    movieId:String,
    // dataMovieById:Array,
    
    date:String,
    memberFullName:String
},{versionKey:false}
)
module.exports=mongoose.model("subscriptions",subscriptionsSchema) //products זה השם של הטבלה בדטה ביס
