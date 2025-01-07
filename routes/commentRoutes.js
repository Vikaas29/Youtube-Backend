import { deletComment, editComment, getComment, saveComment } from "../controllers/commentController.js";

export function commentRoutes(app){

    app.get("/comment",getComment)

    app.post("/comment",saveComment);

    app.put("/comment",editComment);

    app.delete("/comment",deletComment);
    
}