import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryStudentRepository } from 'src/repositories/inMemory/inMemoryStudentRepository'
import { RegisterStudentService } from './registerStudentService'

let studentRepository: InMemoryStudentRepository
let sut: RegisterStudentService

describe('Register Use Case', () => {
  beforeEach(() => {
    studentRepository = new InMemoryStudentRepository()
    sut = new RegisterStudentService(studentRepository)
  })

  it('should be able to register a new student', async () => {
    const { student } = await sut.execute({
      name: 'John Doe',
      description: 'John Doe Student',
    })

    expect(student.id).toEqual(expect.any(String))
  })

  it('should be able to register without description', async () => {
    const { student } = await sut.execute({
      name: 'John Doe',
      description: null,
    })

    expect(student.id).toEqual(expect.any(String))
  })
})
