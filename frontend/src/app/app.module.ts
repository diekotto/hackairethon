import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule} from "@angular/material";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        ChatRoomComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
