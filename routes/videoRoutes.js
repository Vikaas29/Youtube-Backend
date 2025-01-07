import { decreaseLikes, getVideos, increaseLikes } from "../controllers/videoController.js";

export function videoRoutes(app){
    app.get("/videos",getVideos);

    app.put("/uplike",increaseLikes);

    app.put("/downlike",decreaseLikes)
}