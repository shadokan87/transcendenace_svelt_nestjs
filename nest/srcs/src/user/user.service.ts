import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStatusDto, UploadAvatarDto, UniqueNameDto, nickDto } from './dto';

@Injectable()
export class UserService {
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
        async AddFriend(userId: number, friendId: any) {
            const friend = Number(friendId);
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    friends: {
                        push: friend,
                    },
                },
            });
        }

        async RemoveFriend(userId: number, friendId: any) {
            const friend = Number(friendId);
            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: userId,
                },
            });
            user.friends.splice(user.friends.indexOf(friendId), 1);
            const updated_friend_list = user.friends;
            console.log(updated_friend_list);
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    friends: {
                        set: updated_friend_list,
                    },
                },
            });
        }

        async SeeStatus(userId: any) {
            const id = Number(userId);

            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: id,
                },
            });
			if (user.status == "online" && user.nickname == "")
				return ("onboard");
            return user.status;
        }

		async SeeProfile(userId: any) {
			const id = Number(userId);

			return (this.getUserById(id));
		}
		
        async UpdateStatus(userId: number, dto: UpdateStatusDto) {
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    ...dto,
                },
            });
        }

        async ChangeNickName(userId: number, dto: nickDto) {
            const check_nick = await this.prisma.user.findFirst({
                where: {
                    nickname: dto.val,
                },
            });
            if (check_nick)
                	throw new HttpException({
					status: HttpStatus.CONFLICT,
					error: "Nickname \"${dto.val}\" is taken.",
				}, HttpStatus.CONFLICT);
            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: userId,
                },
            });
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    nickname: dto.val,
                },
            });
			return ((await this.getUserById(userId)).nickname);
        }

        async UploadAvatar(userId: number, dto: UploadAvatarDto) {
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    ...dto,
                },
            });
        }
}
