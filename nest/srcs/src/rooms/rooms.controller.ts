import { Get, Post, Controller, Body } from '@nestjs/common';

let rooms = [
	{name: "general"},
	{name: "private"}
];

class createRoomDto {
	name: string;
	// visi: boolean;
};

@Controller('rooms')
export class RoomsController {
	@Get("get")
		returnAll(): any[] {
			return (rooms);
		};
	@Post("create")
	createRoom(@Body() createRoomDto: createRoomDto) {
			console.log("createRoomDto: " + createRoomDto);
			rooms.push(createRoomDto);
		};
}
