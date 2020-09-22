import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'
import { PostMediaValidator, PutMediaValidator } from '../validators/media.validator'
import { MediaService } from '../services/media.service'

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async createOne(@Body() createMedia: PostMediaValidator): Promise<Media> {
    return this.mediaService.create(createMedia)
  }

  @Get('all')
  async findAll(): Promise<Media[]> {
    return this.mediaService.findAll()
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Media> {
    return this.mediaService.findOne(params.id)
  }

  @Put(':id')
  async update(@Body() data: PutMediaValidator, @Param() params): Promise<Media> {
    return this.mediaService.update(data, params.id)
  }

  @Delete(':id')
  async delete(@Param() params): Promise<void> {
    this.mediaService.delete(params.id)
  }
}
