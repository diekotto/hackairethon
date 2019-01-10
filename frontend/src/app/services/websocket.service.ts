import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private websocket: WebSocket;


    constructor() {
        this.initWebsocket();
    }


    initWebsocket() {
        this.websocket = new WebSocket(environment.wsUrl);
        this.websocket.onopen = (e) => { this.onOpenWS(e);};
        this.websocket.onclose = (e) => {this.onCloseWS(e);};
        this.websocket.onmessage = (e) => {this.onMessageWS(e);};
        this.websocket.onerror = (e) => {this.onErrorWS(e);};
    }

    onOpenWS(e) {
        console.log("opened ", e);
    }

    onCloseWS(e){
        console.log("closed " , e);

    }

    onMessageWS(e) {
        console.log("message " , e);

    }

    onErrorWS(e) {
        console.log("error " , e);

    }

    sendMessage(message:string, user:User) {
        //todo definir estructura json esperado por backend
        this.websocket.send(JSON.stringify({
            username: user.username,
            message: message
        }));
    }

    websocket() {
        return this.websocket;
    }
}
