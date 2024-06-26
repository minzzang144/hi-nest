import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AllExceptionsFilter } from '@filters/all-exceptions/all-exceptions.filter';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const httpAdapterHost = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

    await app.listen(3000);
}
bootstrap();
