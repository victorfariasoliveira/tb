import { Injectable } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'

@Injectable()
export class MediaService {
  private readonly medias: Media[] = []

  create(media: Media): Media {
    this.medias.push(media)
    return this.medias.find(m => m.id == media.id)
  }

  findAll(): Media[] {
    return this.medias
  }

  findOne(id: number): Media {
    return this.medias.find(m => m.id == id)
  }

  update(data: Media, id: string): Media {
    let idInt
    if (parseInt(id) !== NaN || parseInt(id) !== undefined) {
      idInt = parseInt(id)
    }

    const media = this.medias.find(m => m.id === idInt)
    return Object.assign(media, data)
  }

  delete(media: Media): void {
    this.medias.splice(media.id, 1)
  }
}
