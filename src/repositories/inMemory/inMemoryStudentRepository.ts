import { Prisma, Student, User } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { StudentRepository } from '../studentRepositoryInterface'

export class InMemoryStudentRepository implements StudentRepository {
  public items: Student[] = []

  async create(data: Prisma.StudentCreateWithoutParentsInput) {
    const student = {
      id: randomUUID(),
      name: data.name,
      description: data.description ?? null,
      created_at: new Date(),
    }

    this.items.push(student)

    return student
  }

  
}
