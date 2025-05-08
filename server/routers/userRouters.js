import express from "express";
import { createUser } from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

// No need to call userRoutesSwagger(router), Swagger will auto-process comments.

router.post('/register', createUser);

// -------------------- user/register -----------------------

/**
 * @swagger
 * /user/register:
 *   post:   
 *     summary: Регистрация нового пользователя
 *     tags: 
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пользователь успешно зарегистрирован
 *       400:
 *         description: Ошибка валидации
 *       500:
 *         description: Ошибка сервера
 */


export default router;
