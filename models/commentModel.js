import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "commentData":{type:String},
    "userName":{type:String},
    "email":{type:String},
    "videoId":{type:String},
});

const comment =mongoose.model("youtubeComments",userSchema);

export default comment;