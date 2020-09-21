import { Module } from '@nestjs/common'
import { MediaController } from './controller/media.controller'
import { MediaService } from './services/media.service'

@Module({
  providers: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
