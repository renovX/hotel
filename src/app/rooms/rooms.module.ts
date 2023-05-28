import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
@NgModule({
  declarations: [RoomListComponent, RoomsAddComponent],

  imports: [CommonModule, RoomsRoutingModule],
})
export class RoomsModule {}
