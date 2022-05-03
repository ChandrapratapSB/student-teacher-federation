import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOneOrFail(studentId: string): Promise<Student> {
    return this.studentRepository.findOneOrFail(studentId);
  }

  async create(studentDTO: CreateStudentInput): Promise<Student> {
    const student = this.studentRepository.create(studentDTO);
    return this.studentRepository.save(student);
  }

  async forTeacher(id:string){
    return this.studentRepository.find({"teacherId": id })
  }
}
