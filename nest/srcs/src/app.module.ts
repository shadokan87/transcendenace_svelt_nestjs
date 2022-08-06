import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { RoomsModule } from './rooms/rooms.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { StatsModule } from './stats/stats.module';
import { GameModule } from './game/game.module';
import { ChatGateWay } from './chat.gateway';
import { RoomsController } from './rooms/rooms.controller';
import {RoomsService} from './rooms/rooms.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
	RoomsModule,
    PrismaModule,
    StatsModule,
    PassportModule.register({ session: true }),
    GameModule
  ],
  controllers: [RoomsController],
  providers: [ChatGateWay, RoomsService],
})
export class AppModule {}
