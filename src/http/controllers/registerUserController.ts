import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsersRepository } from "src/repositories/prisma/prismaUserRepository"
import { ResgisterUserService } from "src/services/registerUserService"
import { z } from 'zod'


export async function registerUserController(request: FastifyRequest, reply: FastifyReply) {

    const registerUserBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { name, email, password } = registerUserBodySchema.parse(request.body)

    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const registerUserService = new ResgisterUserService(prismaUsersRepository)

        registerUserService.execute({
            name,
            email,
            password,
        })
    } catch (err) {
        return reply.status(500).send()
    }

    reply.status(201).send()

}