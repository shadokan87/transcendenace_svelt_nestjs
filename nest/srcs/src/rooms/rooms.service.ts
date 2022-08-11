import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createRoomDto } from './dto';

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
		async getRoomByName(name: string) {
			const ret = await this.prisma.channel.findFirst({
				where: { name: name, }
			});
			return (ret);
		}
		async addAdmin(chanId: number, school_id: number)
		{
			const chan = await this.prisma.channel.findUnique({
				where: {
					id: chanId,
				},
				select: {
					admins: true,
				},
			});
			const user = await this.getUserById(school_id);
			chan.admins.push(school_id);
		}
		async changeOwner(chanId: number, school_id: number)
		{
			// const chan = await this.getRoomById(chanId);
			// if (!chan)
			// 	throw new Error("addAdmin: channel: " + chanId + " does not exist.");
			// await this.prisma.channel.update({
			// 	where: {
			// 		id: chan.id,
			// 	},
			// 	data: {
			// 		admins: {
			// 			push: school_id
			// 		},
			// 	},
			// });
		}
		async getPublicRooms() {
			const rooms = await this.prisma.channel.findMany({
				where: {
					visibility: {
						equals: true
					},
				},
			});
			return (rooms);
		}
		async getPrivateRooms() {
			const rooms = await this.prisma.channel.findMany({
				where: {
					visibility: {
						equals: false
					},
				},
			});
			return (rooms);
		}
		async create(newRoom: createRoomDto) {
			const roomAlreadyExist = await this.getRoomByName(newRoom.name);
			if (roomAlreadyExist)
				throw new HttpException({
					status: HttpStatus.CONFLICT,
					error: "Room: ${newRoom.name} already exists",
				}, HttpStatus.CONFLICT);
			try{
				const chan = await this.prisma.channel.create({
					data: {
						...newRoom,
					},
				});
				await this.addAdmin(chan.id, newRoom.UserId);
				await this.changeOwner(chan.id, newRoom.UserId);
				return (chan);
			}
				catch(e) { return (e.message) }
			}

}
