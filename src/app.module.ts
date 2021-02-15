import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

/* 
1) app : 앱 구동
2) AppModule : 모든 것의 root 모듈
3) AppController : handles routing
4) AppService : stores controllers for the routers
 */
