import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @는 데코레이터로 그냥 함수라고 생각하면 편리할 것 같다.
  // @Get은 Express에서 라우터에 해당되는 app.get메서드와 아주 비슷하며 getHello는 그에 관한 컨트롤 함수라고 생각할 수 있다.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hellow')
  sayHello(): string {
    return 'Hellow everyone';
  }
}
