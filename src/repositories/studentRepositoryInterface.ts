import { Prisma, Student } from "@prisma/client";

export interface StudentRepository {

  create(data: Prisma.StudentCreateWithoutParentsInput): Promise<Student>

}