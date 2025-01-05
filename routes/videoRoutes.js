import { getVideos } from "../controllers/videoController.js";

export function videoRoutes(app){
    app.get("/videos",getVideos);
}