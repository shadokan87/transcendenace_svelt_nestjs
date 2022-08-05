import { IsNotEmpty } from 'class-validator';

export class nickDto {
  @IsNotEmpty()
  val: string;
}
