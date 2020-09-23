import { Test, TestingModule } from '@nestjs/testing'
import { Media } from '../interfaces/media.interface'
import { MediaService } from './media.service'

describe('MediaService', () => {
  let service: MediaService
  const mediaTest: Media = {
    id: 1,
    name: 'Luis Novo - Skore | K4: Conhecimento Líquido',
    duration: 2219,
    provider: 'jYuGqUaJiul0cB5Z',
    media_type: 'video',
    provider_id: 'youtube',
    expires_at: 1600809786289,
    watched: false,
    expired: false,
  }

  let media1: Media
  let media2: Media

  beforeAll(async () => {
    media1 = mediaTest
    media2 = { ...mediaTest, id: 2, name: 'Framework Meta Learning | Skore' }
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaService],
    }).compile()

    service = module.get<MediaService>(MediaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should create a media type', () => {
    const mediaCreated = service.create(media1)
    expect(mediaCreated).toEqual(media1)
  })

  it('should obtain all the media created', () => {
    let mediaCreated = service.create(media1)
    let mediaCreated2 = service.create(media2)

    mediaCreated = { ...mediaCreated, watched: true, expired: false }
    mediaCreated2 = { ...mediaCreated2, watched: true, expired: false }

    const getAllMedias = service.findAll()
    expect(getAllMedias).toEqual([mediaCreated, mediaCreated2])
  })

  it('should update a media type', () => {
    const mediaCreated = service.create(media1)
    const mediaUpdate = { ...mediaCreated, name: 'Framework Meta Learning | Skore' }
    const mediaUpdated = service.update(mediaUpdate, mediaCreated.id.toString())
    expect(mediaUpdated).toEqual(mediaUpdated)
  })

  it('should delete a media type', () => {
    const mediaCreated = service.create(media1)
    service.delete(mediaCreated.id.toString())

    const arrysOfMedias = service.findAll()
    expect(arrysOfMedias).toEqual([])
  })
})
