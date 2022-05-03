import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from './teacher.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Student {

  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  class: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  section: string;

  @Field((type) => Teacher)
  teacher: Teacher;

  @Column()
  @Field()
  teacherId: string;
}
