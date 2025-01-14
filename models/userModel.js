import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "userName":{type:String,required:true},
    "email":{type:String,required:true,unique:true},
    "password":{type:String,required:true},
    "channelName":{type:String}
});

const user =mongoose.model("youtubeUser",userSchema);

export default user;