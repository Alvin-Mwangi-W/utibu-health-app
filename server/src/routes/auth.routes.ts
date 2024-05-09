import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";

const authRoutes: Router = Router();

authRoutes.post('/signup', signUp);
authRoutes.get('/login', login);

export default authRoutes;