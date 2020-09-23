import { BadRequestException, Injectable } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'
import { PostMediaValidator, PutMediaValidator } from '../validators/media.validator'
import CONSTANTS from '../constants/media.constants'
import MediaHelper from '../helpers/media.helper'

@Injectable()
export class MediaService {
  private medias: Media[] = []

  create(media: PostMediaValidator): Media {
    try {
      if (MediaHelper.duplicateIdChecker(this.medias, media.id)) throw new Error()

      this.medias.push({ ...media, watched: false, expired: false })
      return this.medias.find(m => m.id == media.id)
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestCreate.message)
    }
  }

  findAll(): Media[] {
    return MediaHelper.mediaWithWatchedProperty(this.medias)
  }

  findOne(id: string): Media {
    try {
      const media = this.medias.find(m => m.id == MediaHelper.parseId(id))
      if (media === undefined) throw new Error()

      MediaHelper.mediaWithExpiredProperty(media)
      return { ...media, watched: true }
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestGet.message)
    }
  }

  update(data: PutMediaValidator, id: string): Media {
    try {
      let media = this.medias.find(m => m.id === MediaHelper.parseId(id))
      if (media === undefined) {
        throw new BadRequestException(CONSTANTS.badRequestGet.message)
      }
      media = { ...media, watched: false, expired: false }

      this.medias = this.medias.map(m => (m.id === media.id ? Object.assign(media, data) : m))
      return this.medias.find(m => m.id == media.id)
    } catch (error) {
      console.log(error)
      throw new BadRequestException(CONSTANTS.badRequestUpdate.message)
    }
  }

  delete(id: string): void {
    try {
      if (!MediaHelper.duplicateIdChecker(this.medias, MediaHelper.parseId(id))) throw new Error()
      this.medias.splice(
        this.medias.findIndex(m => m.id === MediaHelper.parseId(id)),
        1,
      )
    } catch (error) {
      throw new BadRequestException(CONSTANTS.badRequestDelete.message)
    }
  }
}
