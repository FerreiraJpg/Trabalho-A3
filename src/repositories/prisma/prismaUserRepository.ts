import { Prisma } from "@prisma/client";
import { UsersRepository } from "../userRepositoryInterface";
import { prisma } from "src/lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
  async findByUserId(userId: string) {
    const user = await prisma.user.findUnique( { where: { id: userId } } )
    return user
  }
  
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
        data,
    })
    return user
  }

  async findByEmail(email: string){
    return await prisma.user.findUnique( { where: { email } } )
  }
}