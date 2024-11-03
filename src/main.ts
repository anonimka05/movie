import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'
import * as compression from 'compression'
import {ConfigService} from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const configService = app.get(ConfigService)

app.use(compression())

  if(process.env.NODE_ENV == 'development'){
    app.use(morgan('tiny'))
  }


  await app.listen(configService.get<number>('appConfig.port'), () => {
    console.log(configService.get<number>('appConfig.port'));
    
  });
}
bootstrap();
