import { BadRequestException, Injectable } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'
import { PostMediaValidator, PutMediaValidator } from '../validators/media.validator'
import CONSTANTS from '../constants/media.constants'

@Injectable()
export class MediaService {
  private readonly medias: Media[] = []

  create(media: PostMediaValidator): Media {
    try {
      this.medias.push(media)
      return this.medias.find(m => m.id == media.id)
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestCreate.message)
    }
  }

  findAll(): Media[] {
    return this.medias
  }

  findOne(id: number): Media {
    const media = this.medias.find(m => m.id == id)
    if (media === undefined) throw new BadRequestException(CONSTANTS.badRequestGet.message)
    return media
  }

  update(data: PutMediaValidator, id: string): Media {
    try {
      const media = this.medias.find(m => m.id === parseInt(id))
      return Object.assign(media, data)
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestUpdate.message)
    }
  }

  delete(media: Media): void {
    try {
      this.medias.splice(media.id, 1)
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestDelete.message)
    }
  }
}
