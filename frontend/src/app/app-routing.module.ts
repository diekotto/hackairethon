import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatRoomComponent} from "./chat-room/chat-room.component";

const routes: Routes = [
    {path:'chat', component:ChatRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
