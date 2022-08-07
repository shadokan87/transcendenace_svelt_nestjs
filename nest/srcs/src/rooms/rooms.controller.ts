import { Post, Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { createRoomDto } from "./dto/create.dto";
import { AuthenticateGuard } from "src/auth/guard/42.guard";
import { RoomsService } from './rooms.service';
import {PrismaService} from 'src/prisma/prisma.service'

@UseGuards(AuthenticateGuard)
@Controller('rooms')
export class RoomsController {
	constructor(
				private RoomsService: RoomsService,
				private prisma: PrismaService) {}
	@Post("create")
	createRoom( @Req() req: Request,
			   @Body() dto: createRoomDto) {
			dto.UserId = Number(req.user['school_id']);
			return this.RoomsService.create(dto);
		};
	@Get("public")
	publicRooms(@Req() req: Request)
	{
		return this.RoomsService.getPublicRooms()
	}
	@Get("private")
	privateRooms(@Req() req: Request)
	{
		return this.RoomsService.getPrivateRooms()
	}
}
