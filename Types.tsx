export interface ITripItem {
  _id?: string;
  title: string;
  startDate: string;
  endDate: string;
  picUrl: string;
  createdBy?: string;
  attendees?: [string]; // UserUid
  events?: [string]; // eventId
  photos?: [IPhoto]; // AlbumId
  polls?: [string]; // PollId
  locations?: [string]; // LocationsId
  lodging?: [string]; // LodgingId
  invites?: [string]; // UserUid
}

export interface IUser {
  _id?: string;
  uid: string;
  username: string;
  email: string;
  profile_pic: string;
}

export interface IEvent {
  _id: string;
  tripId: string;
  title: string;
  startTime: string;
  endTime: string;
  eventType: string;
  info: string;
}

export interface IPhoto {
  _id: string;
  tripId: string;
  src: string;
  height: number;
  width: number;
}

export interface ILocation {
  _id: string;
  tripId: string;
  info: string;
  latLng: string;
  ts: string;
}

export interface ILodge {
  _id: string;
  tripId: string;
  title: string;
  address: string;
  picUrl: string;
  latLng: string;
}
