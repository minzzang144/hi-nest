import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}

/* 
1) app : 앱 구동
2) AppModule : 모든 것의 root 모듈
3) AppController : handles routing
4) AppService : stores controllers for the routers
 */
