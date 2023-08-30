import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway({ namespace: 'events'})
export class EventsGateway {

    @SubscribeMessage('join-room')
    handleEvent(@MessageBody() data: string): string {
        console.log(data)
        return data;
    }
}