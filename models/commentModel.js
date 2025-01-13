import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "commentData":{type:String,required:true},
    "userName":{type:String,required:true},
    "email":{type:String,required:true,unique:false},
    "videoId":{type:String,required:true},
});

const comment =mongoose.model("youtubeComments",userSchema);

export default comment;