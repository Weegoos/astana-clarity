import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Заметок",
            version: "1.0.0",
            description: "Документация API для приложения заметок"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [{ bearerAuth: [] }] // Глобальное применение авторизации
    },
    apis: ["./routers/*.js", "./models/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`📄 Swagger доступен по адресу: http://localhost:${process.env.PORT || 3000}/api-docs`);
};

export default setupSwagger;