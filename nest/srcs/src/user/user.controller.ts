import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticateGuard } from 'src/auth/guard/42.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { User42Dto } from './dto/User42.dto';
import { UniqueNameDto } from './dto/unique-name.dto';
import { nickDto } from './dto/Nick.dto';
import { UserService } from './user.service';
import { UploadAvatarDto } from './dto/UploadAvatar.dto';
import { UpdateStatusDto } from './dto';
import {isNotEmpty} from 'class-validator';

@UseGuards(AuthenticateGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private prisma: PrismaService) {}

    @Patch('add_friend')
    AddFriend(
        @Req() req: Request,
        @Body() friendId: any,
    ) {
        const userId = req.user['school_id'];
        // friendId = 5;
        if(req.user['friends'].includes(friendId)){
            return "Already Friends";
        }
        return this.userService.AddFriend(userId, friendId);
    }

    @Patch('remove_friend')
    RemoveFriend(
        @Req() req: Request,
        @Body() friendId: any,
    ) {
        const userId = req.user['school_id'];
        // friendId = 5;
        if(req.user['friends'].includes(friendId)){
            return this.userService.RemoveFriend(userId, friendId);
        }
        return "Not Friends";
    }

    @Get('see_status')
    SeeStatus(
        @Req() req: Request,
        @Body() targetId: any,
    ) {
        const userId = req.user['school_id'];
        targetId = userId;
        if (req.user['friends'].includes(targetId) || userId == targetId){
            return this.userService.SeeStatus(targetId);
        }
        return "Not Your Friend";
    }
 	@Get('profile')
    Profile(
        @Req() req: Request,
        @Body() targetId: any,
    ) {
        const userId = req.user['school_id'];
        targetId = userId;
        return this.userService.SeeProfile(targetId);
    }

    @Patch('update_status')
    UpdateStatus(
        @Req() req: Request,
        @Body() dto: UpdateStatusDto,
    ) {
        const userId = req.user['school_id'];
        return this.userService.UpdateStatus(userId, dto);
    }

    @Patch('change_nickname')
    ChangeUniqueName(
        @Req() req: Request,
        @Body() dto: nickDto,
    ){
        const userId = req.user['school_id'];
        return this.userService.ChangeNickName(userId, dto);
		// return (dto.val);
    }

    @Patch('upload_avatar')
    UploadAvatar(
        @Req() req: Request,
        @Body() dto: UploadAvatarDto,
    ){
        const userId = req.user['school_id'];
        return this.userService.UploadAvatar(userId, dto);
    }
}
