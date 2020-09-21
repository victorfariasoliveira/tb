import { Module } from '@nestjs/common'
import { MediaController } from './controller/media.controller'

@Module({
  controllers: [MediaController],
})
export class MediaModule {}
