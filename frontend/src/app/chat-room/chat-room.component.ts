import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../services/websocket.service";
import {User} from "../models/User";

@Component({
    selector: 'app-chat-room',
    templateUrl: './chat-room.component.html',
    styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {


    constructor(
        private wsService : WebsocketService
    ) {

    }

    ngOnInit() {
        setTimeout(() => {

            this.wsService.sendMessage("test", new User("xd"))
        }, 1000);

    }

    sendMessage(msg :string) {
        if(msg != "") {
            this.wsService.sendMessage(msg, new User("vicent"));
        }
    }


}
