import { hash } from "bcryptjs"
import { UsersRepository } from "src/repositories/userRepositoryInterface"
import { UserAlredyExistsError } from "./errors/userAlredyExistsError"
import { User } from "@prisma/client"

interface registerUserServiceRequest {
    name: string
    email: string
    password: string
}

interface registerUserServiceResponse {
  user: User
}

export class RegisterUserService {
    constructor(private usersRepository: UsersRepository) {}

    async execute({name, email, password}: registerUserServiceRequest): Promise<registerUserServiceResponse> {
        const password_hash = await hash(password, 6)
        
        const emailAlredyExists = await this.usersRepository.findByEmail(email)
    
        if (emailAlredyExists) {
            throw new UserAlredyExistsError()
        }
    
        const user = await this.usersRepository.create({name, email, password_hash})

        return {
          user
        }
    }
}
