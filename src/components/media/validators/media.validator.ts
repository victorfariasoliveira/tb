import { IsInt, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

const MEDIA_VALUES = {
  name: [1, 80],
  provider: [1, 10],
  media_type: [1, 10],
  provider_id: [1, 40],
}

export class PostMediaValidator {
  @IsInt()
  readonly id: number

  @IsNotEmpty()
  @IsString()
  @Length(MEDIA_VALUES.name[0], MEDIA_VALUES.name[1])
  readonly name: string

  @IsString()
  @Length(MEDIA_VALUES.provider[0], MEDIA_VALUES.provider[1])
  readonly provider: string

  @IsNotEmpty()
  @Length(MEDIA_VALUES.media_type[0], MEDIA_VALUES.media_type[1])
  readonly media_type: string

  @IsString()
  @Length(MEDIA_VALUES.provider_id[0], MEDIA_VALUES.provider_id[1])
  readonly provider_id: string

  @IsInt()
  readonly duration: number

  @IsInt()
  readonly expires_at: number
}

export class PutMediaValidator {
  @IsString()
  @Length(MEDIA_VALUES.name[0], MEDIA_VALUES.name[1])
  readonly name: string

  @IsString()
  @Length(MEDIA_VALUES.provider[0], MEDIA_VALUES.provider[1])
  readonly provider: string

  @IsString()
  @Length(MEDIA_VALUES.media_type[0], MEDIA_VALUES.media_type[1])
  readonly media_type: string

  @IsString()
  @Length(MEDIA_VALUES.provider_id[0], MEDIA_VALUES.provider_id[1])
  readonly provider_id: string

  @IsNumber()
  readonly duration: number

  @IsNumber()
  readonly expires_at: number
}
