import { PrismaUsersRepository } from "src/repositories/prisma/prismaUserRepository"
import { AuthenticateService } from "../authenticateService"

export function makeAuthenticateService() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateService = new AuthenticateService(prismaUsersRepository)

  return authenticateService
}
