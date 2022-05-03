import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { StudentService } from './student.service';

@Resolver((of)=>Teacher)
export class TeacherResolver {
  constructor(private studentService: StudentService) {}

    @ResolveField((of)=>[Student])
    students(@Parent() teacher: Teacher): Promise<Student[]>{
        return this.studentService.forTeacher(teacher.id)
    }
}