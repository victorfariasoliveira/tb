import { Module } from '@nestjs/common'
import { MediaModule } from './components/media/media.module'
@Module({
  imports: [MediaModule],
})
export class AppModule {}
