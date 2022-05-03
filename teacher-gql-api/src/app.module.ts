import { ApolloDriver, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'MasteryDevelopment1',
      database: 'teachersDB',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
    TeacherModule],
})
export class AppModule {}
