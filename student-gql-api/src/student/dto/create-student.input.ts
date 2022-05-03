import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateStudentInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  class: string;

  @Field({ nullable: true })
  section: string;

  @Column()
  @Field()
  teacherId: string;
}
