import { Post, Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { create } from "./dto/create.dto";
import { AuthenticateGuard } from "src/auth/guard/42.guard";
import { RoomsService } from './rooms.service';
import {PrismaService} from 'src/prisma/prisma.service';

@UseGuards(AuthenticateGuard)
@Controller('rooms')
export class RoomsController {
	constructor(
				private RoomsService: RoomsService,
				private prisma: PrismaService) {}
	@Post("create")
	createRoom( @Req() req: Request,
			   @Body() dto: create) {
			console.log("createRoomDto: " + dto);
			return this.RoomsService.create(dto);
		};
}
