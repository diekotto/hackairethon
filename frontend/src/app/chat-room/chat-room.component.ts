import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../services/websocket.service";
import {User} from "../models/User";
import {stringify} from "querystring";

@Component({
    selector: 'app-chat-room',
    templateUrl: './chat-room.component.html',
    styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
    public message = "";
    private user: User;
    public text = "";

    constructor(
        private wsService : WebsocketService
    ) {
        this.user = new User("" + (Math.floor(Math.random() * 100)));

        this.wsService.rawMessage.subscribe((data) => this.printMessage(data));
    }

    ngOnInit() {
    }

    printMessage(rawMessage :string) {
        let json = JSON.parse(rawMessage);

        this.text += "<strong>" + json.username + ": </strong> " + json.message + "<br>";

        var chat = document.getElementById("chatArea");
        chat.scrollTop = chat.scrollHeight;

    }

    sendMessage() {
        if(this.message != "") {
            this.wsService.sendMessage(this.message, this.user);
            this.message = "";
        }
    }


}
