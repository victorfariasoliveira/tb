import { Module } from '@nestjs/common'
import { MediaController } from './controllers/media.controller'
import { MediaService } from './services/media.service'

@Module({
  providers: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
