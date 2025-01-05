import video from "../models/videoModel.js";

export async function getVideos(req,res) {
    res.send(await video.find());
}