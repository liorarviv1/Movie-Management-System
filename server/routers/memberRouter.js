const memberBL= require('../models/memberBL')
const subBL= require('../models/subscriptionBL')


const express=require('express') //בעזרתו מממשים את הפונקציות שבביסנסלוגיק

const router=express.Router(); //בעזרתו ממשים את הראוטר

router.get('/',async function(req,res)
{
   let movies= await memberBL.getAllMembers();
   return res.json(movies);
})

router.get('/:id',async function(req,res)
{
    const id=req.params.id;
   let movie= await memberBL.getMember(id);
   return res.json(movie);
})

router.post('/' , async(req,res)=>{

    const obj=req.body;
    const result=await memberBL.addMember(obj);
    res.json(result)
})

router.put('/:id' , async(req,res)=>{
    const id =req.params.id
    const obj=req.body;
    const result=await memberBL.updateMember(id,obj);
    res.json(result)
})

router.delete('/:id' , async(req,res)=>{
    const id =req.params.id
    const result=await memberBL.deleteMember(id);
    res.json(result)

    const result2=await subBL.deleteSubFromMember(id);
    res.json(result2)

})

module.exports=router
