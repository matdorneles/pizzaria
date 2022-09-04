import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// USER ROUTES
router.post("/users", new CreateUserController().handle);

// LOGIN ROUTES
router.post("/session", new AuthUserController().handle);

export { router };
