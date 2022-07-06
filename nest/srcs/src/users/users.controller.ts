import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

@Controller('users')
export class UsersController {
	@Get()
	findMany(): string
	{
		return ("test");
	}
}
