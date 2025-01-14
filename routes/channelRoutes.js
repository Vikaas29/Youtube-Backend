import { createChannel, deleteChannel } from "../controllers/channelController.js";

export function channelRoutes(app){

    app.put("/createchannel",createChannel);
    
    app.put("/deletechannel",deleteChannel);

}