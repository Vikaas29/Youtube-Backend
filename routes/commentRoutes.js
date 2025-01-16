import { deletComment, editComment, getComment, saveComment } from "../controllers/commentController.js";
import { checkLogin } from "../middleware/checkLogin.js";

export function commentRoutes(app){

    app.get("/comment",getComment)

    app.post("/comment",checkLogin,saveComment);

    app.put("/comment",editComment);

    app.delete("/comment",deletComment);
    
}