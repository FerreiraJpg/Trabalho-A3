import { FastifyInstance } from "fastify";
import { registerUserController } from "./controllers/registerUserController";
import { authenticate } from "./controllers/authenticate";


export async function appRoutes(app: FastifyInstance) {

    app.post("/users", registerUserController)
    app.post("/sessions", authenticate)

}