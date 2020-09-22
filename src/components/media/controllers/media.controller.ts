import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'
import { PostMediaValidator, PutMediaValidator } from '../validators/media.validator'
import { MediaService } from '../services/media.service'

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async createOne(
    @Body()
    { id, name, media_type, provider_id, expires_at, duration, provider }: PostMediaValidator,
  ): Promise<Media> {
    const data = { id, name, media_type, provider_id, expires_at, duration, provider }
    return this.mediaService.create(data)
  }

  @Get('all')
  async findAll(): Promise<Media[]> {
    return this.mediaService.findAll()
  }

  @Get(':id')
  async findOne(@Param() { id }): Promise<Media> {
    return this.mediaService.findOne(id)
  }

  @Put(':id')
  async update(
    @Body() { name, media_type, provider_id, expires_at, duration, provider }: PutMediaValidator,
    @Param() { id },
  ): Promise<Media> {
    const data = { name, media_type, provider_id, expires_at, duration, provider }
    return this.mediaService.update(data, id)
  }

  @Delete(':id')
  async delete(@Param() params): Promise<void> {
    this.mediaService.delete(params.id)
  }
}
