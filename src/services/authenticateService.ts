import { compare, hash } from "bcryptjs"
import { UsersRepository } from "src/repositories/userRepositoryInterface"
import { User } from "@prisma/client"
import { InvalidCredentialsError } from "./errors/invalidCredentialsError"

interface AuthenticateServiceRequest {
  email: string
  password: string
}

interface AuthenticateServiceResponse {
  user: User
}


export class AuthenticateService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({email, password}: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
    
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }
      
    const passwordMatches = await compare(password, user.password_hash)
      
    if (!passwordMatches) {    
      throw new InvalidCredentialsError()
    }

    return {
      user
    }
  }
}
