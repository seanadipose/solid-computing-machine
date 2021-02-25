import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataService } from 'apps/api/src/core/models/data-provider.model';

@Controller()
export class BaseController<E, C, U> {
  // @ts-ignore
  constructor(protected readonly service: DataService<E, Repository<E>>) {}

  @Post()
  create(@Body() createDto: C) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: U) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
