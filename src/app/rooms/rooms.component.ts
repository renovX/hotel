import { Component, OnInit, Self } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomService } from './service/room.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomService],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Ali Villa';
  dataStream = new Observable((observe) => {
    observe.next('data1');
    observe.next('data2');
    observe.next('data3');
    observe.complete();
  });
  room: Room = {
    noRooms: 20,
    availableRooms: 2,
    bookedRooms: 18,
  };
  roomList: RoomList[] = [];

  constructor(@Self() private roomService: RoomService) {}
  ngOnInit(): void {
    this.roomService.getRooms().subscribe((room) => {
      this.roomList = room;
    });
    this.dataStream.subscribe((data) => {
      console.log(data);
    });
  }
}
