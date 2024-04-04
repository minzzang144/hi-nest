import { Injectable } from '@nestjs/common';

import { CatCreateRequestDto } from './dto/cat-create-request.dto';
import { CatReadQueryDto } from './dto/cat-read-query.dto';
import { CatUpdateRequestDto } from './dto/cat-update-request.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(catCreateRequestDto: CatCreateRequestDto) {
        this.cats.push(catCreateRequestDto);
    }

    readAll(catReadQueryDto: CatReadQueryDto): Cat[] {
        console.log(catReadQueryDto);
        return this.cats;
    }

    readOne(id: number): Cat {
        return this.cats[id];
    }

    update(id: string, catUpdateRequestDto: CatUpdateRequestDto) {
        this.cats[id] = catUpdateRequestDto;
    }

    delete(id: string) {
        this.cats.splice(parseInt(id, 10), 1);
    }
}
