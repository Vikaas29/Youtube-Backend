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

export async function addVideo(req,res){
    try{const{videoId,url,title,thumbnail,description,genre,owner}=req.body;

        const newVideo= new video({
            videoId: videoId,
            url:url,
            title:title,
            thumbnail:thumbnail,
            description:description,
            genre:genre,
            owner:owner
        });

        await newVideo.save();
      

      res.status(201).json({"message":"video added"});}
      catch(err){
        res.status(400).json({"message":err});
      }
}