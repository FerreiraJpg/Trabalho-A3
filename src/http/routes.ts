import { FastifyInstance } from "fastify";
import { registerUserController } from "./controllers/registerUserController";


export async function appRoutes(app: FastifyInstance) {

    app.post("/users", registerUserController)

}