import { decreaseLikes, getVideos, increaseLikes } from "../controllers/videoController.js";

export function videoRoutes(app){
    app.get("/videos",getVideos);

    app.put("/upLike",increaseLikes);

    app.put("downLike",decreaseLikes)
}