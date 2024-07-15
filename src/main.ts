import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка CORS для разрешения любых запросов с любого источника
  app.enableCors({
    origin: '*', // Разрешить запросы с любого источника
    methods: '*', // Разрешить все методы
    allowedHeaders: '*', // Разрешить все заголовки
  });

  await app.listen(3000);
}
bootstrap();
