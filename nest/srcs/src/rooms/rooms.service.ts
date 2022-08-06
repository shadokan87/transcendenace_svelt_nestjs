import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { create } from './dto';

@Injectable()
export class RoomsService {
    constructor(
        private prisma: PrismaService,
        ) {}
		async getUserById(userId: any) {
			const id = Number(userId);

            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: id,
                },
            });
            return user;
		}
		async create(newRoom: create) {
			const roomAlreadyExist = await this.prisma.channel.findFirst({
				where: {
					name: newRoom.name,
				},
			});
			if (roomAlreadyExist)
				return ("Already exists");
			const chan = await this.prisma.channel.create({
				data: { ...newRoom, owner: 2 }
				// data: {
				// 	name: newRoom.name,
				// 	visibility: newRoom.visibility,
				// 	password: newRoom.password,
				// 	avatar: newRoom.avatar,
				// }
			});
			return (newRoom.name);
		}
}
