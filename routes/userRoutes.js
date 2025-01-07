// import { saveData } from "../controllers/saveData.js";
import { login, registerUser } from "../controllers/userController.js";

export function userRoutes(app){

    app.post("/register",registerUser);
    
    app.post("/login",login);

    // app.get("/save",saveData)

}