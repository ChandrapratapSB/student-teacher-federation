import { ApolloDriver, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Teacher } from './student/entities/teacher.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Teacher],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'MasteryDevelopment1',
      database: 'studentDB',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
})
export class AppModule {}
