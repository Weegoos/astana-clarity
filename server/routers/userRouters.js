import express from "express";
import { createUser } from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();
import "./swagger/userRoutesSwagger.js"; 

// No need to call userRoutesSwagger(router), Swagger will auto-process comments.

router.post('/register', createUser);


export default router;
