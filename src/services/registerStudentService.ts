import { Student, User } from "@prisma/client"
import { StudentRepository } from "src/repositories/studentRepositoryInterface"

interface RegisterStudentServiceRequest {
    name: string
    description: string | null
}

interface RegisterStudentServiceResponse {
  student: Student
}

export class RegisterStudentService {
    constructor(private studentRepository: StudentRepository) {}

    async execute({name, description}: RegisterStudentServiceRequest): Promise<RegisterStudentServiceResponse> {    
        const student = await this.studentRepository.create({name, description})

        return {
          student
        }
    }
}
