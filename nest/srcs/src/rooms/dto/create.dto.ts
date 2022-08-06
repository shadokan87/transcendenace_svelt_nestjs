import { IsNotEmpty } from 'class-validator';

export class create {
  @IsNotEmpty()
  name: string
  password: string
  visibility: boolean
  avatar: string
}
