import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { createRoomDto } from './dto';

const chanNotFoundError = (chanId: number) => {
	throw new HttpException({
	status: HttpStatus.NOT_FOUND,
	error: 'Channel width id ' + chanId + ' does not exists.',
		}, HttpStatus.NOT_FOUND);
};

const userNotFoundError = (userId: number) => {
	throw new HttpException({
	status: HttpStatus.NOT_FOUND,
	error: 'User width id ' + userId + ' does not exists.',
		}, HttpStatus.NOT_FOUND);
};

const isPrismaNotFound = (e: any) => {
	return ((e instanceof Prisma.PrismaClientKnownRequestError
			&& e.code == 'P2025' || e.code == 'P2016'));
};

const isPrismaConnectError = (e: any) => {
	return ((e instanceof Prisma.PrismaClientKnownRequestError
			&& e.code == 'P2018'));
};

const unexpectedError = () => {
	throw new HttpException({
	status: HttpStatus.BAD_REQUEST,
	error: "An unexpectedError has occured. Please try again.",
		}, HttpStatus.BAD_REQUEST);
};

const ConflictError = (error: string) => {
	throw new HttpException({
		status: HttpStatus.CONFLICT,
		error: error,
	}, HttpStatus.CONFLICT);
};

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
			try{ // grant user admin access in for ${chanId}
					let updatedUser = await this.prisma.user.update({
						where: {
							school_id: school_id,
						},
						include: {
							adminInChannel: true,
						},
						data: {
							adminInChannel: {
								connect: [{id: chanId}],
							},
						},
					});
				return (updatedUser);
			} catch(e) { // user not found / channel not found || unexpectedError
					if (isPrismaNotFound(e)) {
						if (e.code == 'P2016')
							userNotFoundError(school_id);
						else
							chanNotFoundError(chanId);
					}
					else
						unexpectedError();
				return (e.code);
			}
		}
		async unSubscribeToRoom(school_id: number, chanId: number)
		{
			try{ // add ${chanId} in user's Channel list
					let updatedUser = await this.prisma.user.update({
						where: {
							school_id: school_id,
						},
						include: {
							subscribedChannel: true,
						},
						data: {
							subscribedChannel: {
								disconnect: [{id: chanId}],
							},
						},
					});
				return (updatedUser);
			} catch(e) { // user not found / channel not found || unexpectedError
					if (isPrismaNotFound(e)) {
						if (e.code == 'P2016')
							userNotFoundError(school_id);
						else
							chanNotFoundError(chanId);
					}
					else
						unexpectedError();
				return (e.code);
			}
		}
		async subscribeToRoom(school_id: number, chanId: number)
		{
			try{ // add ${chanId} in user's Channel list
					let updatedUser = await this.prisma.user.update({
						where: {
							school_id: school_id,
						},
						include: {
							subscribedChannel: true,
						},
						data: {
							subscribedChannel: {
								connect: [{id: chanId}],
							},
						},
					});
				return (updatedUser);
			} catch(e) { // user not found / channel not found || unexpectedError
					if (isPrismaNotFound(e)) {
						if (e.code == 'P2016')
							userNotFoundError(school_id);
						else
							chanNotFoundError(chanId);
					}
					else
						unexpectedError();
				return (e.code);
			}
		}
		async banUser(school_id: number, chanId: number)
		{
			let updatedUser = await this.prisma.user.update({
					where: {
						school_id: school_id,
					},
					include: {
						bannedInChannel: true,
					},
					data: {
						bannedInChannel: {
							connect: [{id: chanId}],
						},
					},
				});
			this.unSubscribeToRoom(school_id, chanId);
			return (updatedUser);
		}
		async unbanUser(school_id: number, chanId: number)
		{
			let updatedUser = await this.prisma.user.update({
					where: {
						school_id: school_id,
					},
					include: {
						bannedInChannel: true,
					},
					data: {
						bannedInChannel: {
							disconnect: [{id: chanId}],
						},
					},
				});
			return (updatedUser);
		}
		async removeAdmin(chanId: number, school_id: number)
		{
			try{ // grant user admin access in for ${chanId}
					let updatedUser = await this.prisma.user.update({
						where: {
							school_id: school_id,
						},
						include: {
							adminInChannel: true,
						},
						data: {
							adminInChannel: {
								disconnect: [{id: chanId}],
							},
						},
					});
				return (updatedUser);
			} catch(e) { // user not found / channel not found || unexpectedError
					if (isPrismaNotFound(e)) {
						if (e.code == 'P2016')
							userNotFoundError(school_id);
						else
							chanNotFoundError(chanId);
					}
					else
						unexpectedError();
				return (e.code);
			}

		}
		async getAdmins(chanId: number)
		{
			const admins = await this.prisma.channel.findUnique({
				where: {
					id: chanId,
				},
				select: {
					admins : {
						select: {
							school_id: true
						},
					},
				},
			});
			return admins;
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
				ConflictError('Channel with name ' + newRoom.name + ' already exists.');
			try{
				const chan = await this.prisma.channel.create({
					data: {
						...newRoom,
					},
				});
				this.addAdmin(chan.id, chan.UserId);
				this.subscribeToRoom(chan.UserId, chan.id);
			}
				catch(e) {
					unexpectedError();
				}
			}
}
