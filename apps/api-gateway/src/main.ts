import { createProxyMiddleware } from 'http-proxy-middleware';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(
    `/${globalPrefix}/articles`,
    createProxyMiddleware({
      target: process.env.ARTICLES_SERVICE_URL,
      changeOrigin: true,
    })
  );

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
