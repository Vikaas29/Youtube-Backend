import { createChannel, deleteChannel } from "../controllers/channelController.js";
import { checkLogin } from "../middleware/checkLogin.js";

export function channelRoutes(app){

    app.put("/createchannel",checkLogin,createChannel);
    
    app.put("/deletechannel",checkLogin,deleteChannel);

}