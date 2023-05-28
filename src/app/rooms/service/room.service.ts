import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  roomList: RoomList[] = [
    /* {
      type: 'Deluxe',
      price: 1000,
      amenities: 'Free Wifi',
      img: '',
      checkinTime: new Date('24-May-2023'),
      checkoutTime: new Date('24-May-2023'),
    },
    {
      type: 'Private',
      price: 2000,
      amenities: 'Free Wifi,Free AC',
      img: '',
      checkinTime: new Date('24-May-2023'),
      checkoutTime: new Date('24-May-2023'),
    },*/
  ];
  constructor(private http: HttpClient) {
    console.log('Room service Created');
  }
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
