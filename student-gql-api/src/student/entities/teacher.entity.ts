import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Teacher{

    @Field((type) => ID)
    @Directive('@external')
    id: string;

    @Field((type) => [Student])
    students: Student[];
}