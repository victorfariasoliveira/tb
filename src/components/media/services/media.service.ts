import { Injectable } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'

@Injectable()
export class MediaService {
  private readonly medias: Media[] = []

  create(media: Media): Media {
    this.medias.push(media)
    return media
  }

  findAll(): Media[] {
    return this.medias
  }

  findOne(id: number): Media {
    return this.medias.find(m => m.id == id)
  }

  update(data: any, id: string): Media {
    let idInt
    if (parseInt(id) !== NaN || parseInt(id) !== undefined) {
      idInt = parseInt(id)
    }

    const cat = this.medias.find(m => m.id === idInt)
    return Object.assign(cat, data)
  }

  delete(media: Media): void {
    this.medias.splice(media.id, 1)
  }
}
