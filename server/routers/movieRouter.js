const movieBL= require('../models/movieBL')
const subBL= require('../models/subscriptionBL')

const express=require('express') //בעזרתו מממשים את הפונקציות שבביסנסלוגיק

const router=express.Router(); //בעזרתו ממשים את הראוטר

router.get('/',async function(req,res)
{
   let movies= await movieBL.getAllMovies();
   return res.json(movies);
})

router.get('/:id',async function(req,res)
{
    const id=req.params.id;
   let movie= await movieBL.getMovie(id);
   return res.json(movie);
})

router.post('/' , async(req,res)=>{

    const obj=req.body;
    const result=await movieBL.addMovie(obj);
    res.json(result)
})

router.put('/:id' , async(req,res)=>{
    const id =req.params.id
    const obj=req.body;
    const result=await movieBL.updateMovie(id,obj);
    res.json(result)
})

router.delete('/:id' , async(req,res)=>{
    const id =req.params.id
    const result=await movieBL.deleteMovie(id);
    res.json(result)

    const result2=await subBL.deleteSubFromMovie(id)
    res.json(result2)

    
})

module.exports=router
