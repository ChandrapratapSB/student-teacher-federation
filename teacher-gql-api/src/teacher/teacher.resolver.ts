import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
} from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherInput } from './dto/create-teacher.input';

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Query(() => Teacher, { name: 'getTeacherById' })
  getTeacherById(@Args('id') id: string) {
    return this.teacherService.findOne(id);
  }

  @Query(() => [Teacher], { name: 'getAllTeachers' })
  getAllTeachers() {
    return this.teacherService.findAll();
  }

  @Mutation(() => Teacher)
  createTeacher(
    @Args('createTeacherInput') createTeacherInput: CreateTeacherInput,
  ) {
    return this.teacherService.create(createTeacherInput);
  }

  @ResolveReference()
  resolveReference(ref: { __typename: string; id: string }): Promise<Teacher> {
    return this.teacherService.findOne(ref.id);
  }
}
