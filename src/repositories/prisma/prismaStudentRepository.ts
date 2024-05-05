import { Prisma } from "@prisma/client";
import { prisma } from "src/lib/prisma";
import { StudentRepository } from "../studentRepositoryInterface";

export class PrismaStudentRepository implements StudentRepository {
  async create(data: Prisma.StudentCreateWithoutParentsInput) {
    const student = await prisma.student.create({
      data,
    })
    return student
  }
}