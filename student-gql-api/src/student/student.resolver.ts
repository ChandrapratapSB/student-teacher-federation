import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { Teacher } from './entities/teacher.entity';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student], { name: 'getAllStudents' })
  getAllStudents() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'getStudentById' })
  getStudentById(@Args('id') studentId: string) {
    return this.studentService.findOneOrFail(studentId);
  }

  @Mutation(() => Student, { name: 'createStudent' })
  createStudent(@Args('CreateStudentInput') student: CreateStudentInput) {
    return this.studentService.create(student);
  }

  @ResolveField((of) => Teacher)
  teacher(@Parent() student: Student) {
    return {
      __typename: 'Teacher',
      id: student.teacherId,
    };
  }
}
