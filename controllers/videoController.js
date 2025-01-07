import video from "../models/videoModel.js";

export async function getVideos(req,res) {
    res.send(await video.find());
}

export async function increaseLikes(req,res) {
    
    const {id}=req.body;

    await video.updateOne({"videoId":id},{$inc : {likes: 1}})

    res.send("updation successfull");
}

export async function decreaseLikes(req,res) {
    
    const {id}=req.body;

   await video.updateOne({"videoId":id},{$inc : {likes: -1}});

   res.send("updation successfull");

}