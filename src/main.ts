import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService} from "@nestjs/config";
import { AppConfig} from "./configurations";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService<AppConfig>>(ConfigService);
  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
