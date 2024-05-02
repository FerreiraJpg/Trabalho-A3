import { FastifyReply, FastifyRequest } from "fastify";
import { InvalidCredentialsError } from "src/services/errors/invalidCredentialsError";
import { makeAuthenticateService } from "src/services/factories/makeAuthenticateService";
import { z } from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateService = makeAuthenticateService()

    await authenticateService.execute({ email, password })
  } catch (err) {
    if (err instanceof(InvalidCredentialsError)) {
      reply.status(400).send(err.message)
    }

    throw err
  }

  reply.status(200).send()
}