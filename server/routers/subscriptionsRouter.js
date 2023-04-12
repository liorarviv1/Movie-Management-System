const express=require('express');
const alldatabl=require('../models/subscriptionBL');

const router= express.Router();

router.get('/',async function(req,res)
{
   let subs= await alldatabl.getalldata();
   return res.json(subs);
})

router.get('/:id', async (req, resp) => {
   const id = req.params.id;
   const us = await alldatabl.getdatabyid(id);
   resp.json(us);
 });

 router.post('/', async (req, resp) => {
   const obj = req.body;
   const result = await alldatabl.addSub(obj);
   resp.json(result);
 });

   router.put('/:id', async (req, resp) => {
   const id = req.params.id;
   const obj = req.body;
   const result = await alldatabl.updateSub(id, obj);
   resp.json(result);
 });

 router.delete('/:id' , async(req,res)=>{
   const id =req.params.id
   const result=await alldatabl.deleteSub(id);
   res.json(result)
})

module.exports=router;
