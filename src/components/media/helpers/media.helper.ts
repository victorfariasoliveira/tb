import { Injectable } from '@nestjs/common'
import { Media } from '../interfaces/media.interface'
import { isValid } from 'date-fns'

@Injectable()
class MediaHelper {
  mediaWithExpiredProperty(media: Media): Media {
    try {
      if (isValid(media.expires_at) && media.expires_at < Date.now()) {
        media.expired = true
        return media
      }
      return media
    } catch (error) {
      throw new Error()
    }
  }

  mediaWithWatchedProperty(medias: Media[]): Media[] {
    try {
      medias = medias.map(media => ({ ...media, watched: true }))
      return medias
    } catch (error) {
      throw new Error()
    }
  }

  duplicateIdChecker(medias: Media[], id: number): boolean {
    return medias.find(m => m.id === id) ? true : false
  }

  parseId(id: string): number {
    return parseInt(id)
  }
}

export default new MediaHelper()
