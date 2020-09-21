import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'

@Controller('media')
export class MediaController {
  @Post()
  async create(): Promise<any> {
    return { info: 'created' }
  }

  @Get('all')
  async findAll(): Promise<any> {
    return { info: 'all' }
  }

  @Get(':id')
  async findOne(@Param() params): Promise<string> {
    return params.id
  }

  @Put(':id')
  async update(@Body() data: any, @Param() params): Promise<any> {
    return {
      id: params.id,
      body: data,
    }
  }

  @Delete(':id')
  async delete(@Param() params): Promise<string> {
    return params.id
  }
}
