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
