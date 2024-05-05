import { UsersRepository } from "src/repositories/userRepositoryInterface"
import { User } from "@prisma/client"
import { ResourceNotFoundError } from "./errors/ResourceNotFoundError"

interface GetUserProfileServiceRequest {
  userId: string
}

interface GetUserProfileResponse {
  user: User
}

export class GetUserProfileService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({userId}: GetUserProfileServiceRequest): Promise<GetUserProfileResponse> {
    const user = await this.usersRepository.findByUserId(userId)

    if (!user) {
        throw new ResourceNotFoundError()
    }

    return {
      user
    }
  }
}
