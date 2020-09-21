import { Module } from '@nestjs/common'
import { MediaService } from './services/media.service'

@Module({
  providers: [MediaService],
})
export class MediaModule {}
