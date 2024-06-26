import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    Res,
} from '@nestjs/common';

import { Response } from 'express';

import { CatsService } from './cats.service';
import { CatCreateRequestDto } from './dto/cat-create-request.dto';
import { CatUpdateRequestDto } from './dto/cat-update-request.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() catCreateRequestDto: CatCreateRequestDto, @Res() res: Response) {
        const cat = this.catsService.create(catCreateRequestDto);

        res.status(HttpStatus.CREATED).json(cat);
    }

    @Get()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    readAll(
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Query('offset', new DefaultValuePipe(10), ParseIntPipe) offset: number,
        @Res() res: Response,
    ) {
        const allCats = this.catsService.readAll({ limit, offset });

        res.status(HttpStatus.OK).json(allCats);
    }

    @Get(':id')
    // TODO: class-validator 라이브러리를 사용하여 id를 number 타입으로 변환
    readOne(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, // id 파라미터를 number 타입으로 변환
        @Res() res: Response,
    ) {
        const cat = this.catsService.readOne(id);

        res.status(HttpStatus.OK).json(cat);
    }

    @Put(':id')
    // TODO: class-validator 라이브러리를 사용하여 id를 number 타입으로 변환
    update(@Param('id') id: string, @Body() catUpdateRequestDto: CatUpdateRequestDto, @Res() res: Response) {
        const updatedCat = this.catsService.update(id, catUpdateRequestDto);

        res.status(HttpStatus.OK).json(updatedCat);
    }

    @Delete(':id')
    // TODO: class-validator 라이브러리를 사용하여 id를 number 타입으로 변환
    delete(@Param('id') id: string, @Res() res: Response) {
        this.catsService.delete(id);

        res.status(HttpStatus.NO_CONTENT).send();
    }
}
