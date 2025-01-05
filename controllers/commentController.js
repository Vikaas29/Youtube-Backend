import comment from "../models/commentModel.js";

export async function saveComment(req,res){

    const {commentData,userName,email,videoId}=req.body;

    const newComment=new comment({
        commentData:commentData,
        userName:userName,
        email:email,
        videoId:videoId
    });

    await newComment.save();
    res.send("comment saved");
}

export async function editComment(req,res){
    
    const {commentData,id}=req.body;

   await comment.updateOne({_id:id},{ $set: { commentData: commentData } })

    
    res.send("comment saved");

}

export async function deletComment(req,res){
    const{id}=req.body

    await comment.deleteOne({_id:id});

    res.send("deletion successfull");
}