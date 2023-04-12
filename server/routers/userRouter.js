const userBL= require('../models/userBL')
const express=require('express') //בעזרתו מממשים את הפונקציות שבביסנסלוגיק

const router=express.Router(); //בעזרתו ממשים את הראוטר

router.get('/',async function(req,res)
{
   let users= await userBL.getAllUsers();
   return res.json(users);
})

router.get('/:id',async function(req,res)
{
    const id=req.params.id;
   let user= await userBL.getUser(id);
   return res.json(user);
})

router.post('/' , async(req,res)=>{

    const obj=req.body;
    const result=await userBL.addUser(obj);
    res.json(result)
})

router.put('/:id' , async(req,res)=>{
    const id =req.params.id
    const obj=req.body;
    const result=await userBL.updateUser(id,obj);
    res.json(result)
})

router.delete('/:id' , async(req,res)=>{
    const id =req.params.id
    const result=await userBL.deleteUser(id);
    res.json(result)
})

module.exports=router
