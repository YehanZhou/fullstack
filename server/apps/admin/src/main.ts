import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const options = new DocumentBuilder()
    .setTitle('视频网站全栈练习')
    .setDescription('全栈练习-管理端后端')
    .setVersion('1.0')
    .addTag('nest')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); // 路径直接api会冲突
  await app.listen(3000);
  console.log('listen on http://localhost:3000')
}
bootstrap();
