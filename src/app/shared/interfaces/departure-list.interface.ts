export interface TrainPayload {
  payload : TrainCodes[];
}

export interface TrainCodes {
  EVACode: string;
  UICCode: string;
  code: string;
  heeftFaciliteiten: boolean;
  heeftReisassistentie: boolean;
  heeftVertrektijden: boolean;
  ingangsDatum: string;
  land: string;
  lat: Number;
  lng: Number;
  naderenRadius: Number;
  namen: Name;
  radius: Number;
  sporen: [];
  stationType: string;
  synoniemen: [string];
}

export interface Name {
  kort: string;
  lang: string;
  middel: string;
}

export interface DepartureResponse{
  links: {};
  meta: {};
  payload: TrainDetailsPayload;
}

export interface TrainDetailsPayload {
  source: string;
  departures: TrainDetails[];
}
export interface TrainDetails {
  actualDateTime: string;
  actualTimeZoneOffset: Number;
  cancelled: boolean;
  departureStatus: string;
  direction: string;
  messages: []
  name: string;
  plannedDateTime: string;
  plannedTimeZoneOffset: Number;
  plannedTrack: string;
  product: {}
  routeStations: []
  trainCategory: string;
}

export interface loginInfo {
  isLoggedIn: boolean;
  accessAllowed: boolean;
}
