import { Post, Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { createRoomDto } from "./dto/create.dto";
import { AuthenticateGuard } from "src/auth/guard/42.guard";
import { RoomsService } from './rooms.service';
import { PrismaService } from 'src/prisma/prisma.service'
import {channel} from 'diagnostics_channel';

@UseGuards(AuthenticateGuard)
@Controller('rooms')
export class RoomsController {
	constructor(
				private RoomsService: RoomsService,
				private prisma: PrismaService) {}
	@Post("create")
	createRoom( @Req() req: Request,
			   @Body() dto: createRoomDto) {
			dto = req.body;
			dto.UserId = Number(req.user['school_id']);
			return this.RoomsService.create(dto);
		};
	@Post("addAdmin")
	addAdmin( @Req() req: Request,
			   @Body() dto: {chanId: number, school_id: number}) {
			dto = req.body;
			return this.RoomsService.addAdmin(dto.chanId, dto.school_id);
	}
	@Post("banUser")
	banUser( @Req() req: Request,
			   @Body() dto: {school_id: number, chanId: number}) {
			dto = req.body;
			return this.RoomsService.banUser(dto.school_id, dto.chanId);
	}
	@Post("unbanUser")
	un_banUser( @Req() req: Request,
			   @Body() dto: {school_id: number, chanId: number}) {
			dto = req.body;
			return this.RoomsService.unbanUser(dto.school_id, dto.chanId);
	}
	@Get("Admin")
	getAdmin( @Req() req: Request,
			   @Body() dto: {chanId: number}) {
			// return this.RoomsService.getAdmins(dto.chanId);
			return dto;
		};
	@Get("public")
	publicRooms(@Req() req: Request)
	{
		return this.RoomsService.getPublicRooms()
	}
	// @Get("id")
	// byId(@Req() req: Request, @Body() dto: {id: number})
	// {
	// 	return this.RoomsService.getRoomById(dto.id);
	// }
	@Get("private")
	privateRooms(@Req() req: Request)
	{
		return this.RoomsService.getPrivateRooms();
	}
}
