export interface Room {
  noRooms: number;
  availableRooms: number;
  bookedRooms: number;
}
export interface RoomList {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
