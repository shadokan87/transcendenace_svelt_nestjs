import {
	SubscribeMessage,
	WebSocketGateway, WebSocketServer,
	OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect

} from "@nestjs/websockets";

import { Logger } from "@nestjs/common";
import { Socket, Server } from "socket.io";

@WebSocketGateway({ cors: {origin: "*"} })
export class ChatGateWay implements OnGatewayInit,
OnGatewayDisconnect,
OnGatewayConnection {
	@WebSocketServer() serv: Server;
	private logger: Logger = new Logger("ChatGateWay");
	afterInit(serv: any) {
		this.logger.log("Init");
	}
	@SubscribeMessage("message")
	caseMessage(client: Socket, payload: string): void {
		this.serv.emit("message", payload);
	}
	@SubscribeMessage("messageToRoom")
	caseToRoom(client: Socket, payload: any): void {
		this.serv.to(payload.destination).emit("message", payload.message);
	}
	handleDisconnect(client: Socket) {
		this.logger.log("Client with id: " + client.id + "is now disconnected");
	}
	handleConnection(client: Socket, ...args: any[]) {
		this.logger.log("Client with id: " + client.id + "just connected");
		client.join("general");
	}
};
