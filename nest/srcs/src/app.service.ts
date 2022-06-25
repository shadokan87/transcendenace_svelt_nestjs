import { Injectable } from '@nestjs/common';
import { Server } from "socket.io";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tes42t';
  }
}
