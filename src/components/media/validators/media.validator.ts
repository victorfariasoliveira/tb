import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class PostMediaValidator {
  @IsNumber()
  readonly id: number

  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsString()
  readonly provider: string

  @IsNotEmpty()
  readonly media_type: string

  @IsString()
  readonly provider_id: string

  @IsNumber()
  readonly duration: number

  @IsNumber()
  readonly expires_at: number
}

export class PutMediaValidator {
  @IsString()
  readonly name: string

  @IsString()
  readonly provider: string

  @IsString()
  readonly media_type: string

  @IsString()
  readonly provider_id: string

  @IsNumber()
  readonly duration: number

  @IsNumber()
  readonly expires_at: number
}
