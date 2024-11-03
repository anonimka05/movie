import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'psql',
      database: 'movie',
      entities: [],
      synchronize: true,
    }),
    MovieModule,
  ],
})
export class AppModule {}
