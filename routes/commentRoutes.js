import { deletComment, editComment, saveComment } from "../controllers/commentController.js";

export function commentRoutes(app){

    app.post("/comment",saveComment);

    app.put("/comment",editComment);

    app.delete("/comment",deletComment);
}