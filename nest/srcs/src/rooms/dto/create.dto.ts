import { IsNotEmpty } from "class-validator";
export class createRoomDto {
	@IsNotEmpty()
  name: string;

  password: string;

  visibility: boolean;

  avatar: string;

  UserId: number;
}
