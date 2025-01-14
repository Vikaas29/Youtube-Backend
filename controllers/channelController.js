import user from "../models/userModel.js";

export async function createChannel(req,res){

    
    try{
         const {email,channelName}= req.body;
 
     
 
      await user.updateOne({email:email},{ $set: { channelName: channelName } })

    
   res.status(201).json({message:"Channel created" });
 
     
 }
 catch(err){
     return res.status(500).json(err.message);
 }
 }

 export async function deleteChannel(req,res){

    
    try{
         const {email}= req.body;
 
     
 
     await user.updateOne({email:email},{ $set: { channelName: "" } });

    
   res.status(201).json({message:"Channel deleted"});
 
     
 }
 catch(err){
     return res.status(500).json(err.message);
 }
 }