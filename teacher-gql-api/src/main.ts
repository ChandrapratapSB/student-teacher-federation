import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`The app is now hosted at " http://localhost:${3001}/graphql ".`);
  await app.listen(3001);
}
bootstrap();
