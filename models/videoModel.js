import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    videoId: String,
    url:String,
    title: String,
    thumbnail: String,
    description: String,
    views: Number,
    likes: Number,
    uploadDate: String,
    genre:String
});

const video =mongoose.model("youtubeVideos",userSchema);

export default video;