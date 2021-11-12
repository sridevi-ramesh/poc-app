import {Name, TrainPayload} from "../../../shared/interfaces/departure-list.interface";

export const mockTrainCodeData : TrainPayload = {
  payload : [
    {
      EVACode: '',
      UICCode: '',
      code: 'GVC',
      heeftFaciliteiten: false,
      heeftReisassistentie: false,
      heeftVertrektijden: false,
      ingangsDatum: '',
      land: '',
      lat: 3,
      lng: 3,
      naderenRadius: 3,
      namen: {
        kort: '',
        lang: 'Den Haag Centraal',
        middel: ''
      },
      radius: 3,
      sporen: [],
      stationType: '',
      synoniemen: ['']
    }
  ]
}



export const DepartureResponseMock = {
  links: {},
  meta: {},
  payload: {
   source: '',
   departures:[
     {actualDateTime: '',
       actualTimeZoneOffset: 2,
       cancelled: false,
       departureStatus: '',
       direction: '',
       messages: [],
       name: '',
       plannedDateTime: '',
       plannedTimeZoneOffset: 5,
       plannedTrack: '',
       product: {},
       routeStations: [],
       trainCategory:''},
     {actualDateTime: '',
       actualTimeZoneOffset: 2,
       cancelled: false,
       departureStatus: '',
       direction: '',
       messages: [],
       name: '',
       plannedDateTime: '',
       plannedTimeZoneOffset: 5,
       plannedTrack: '',
       product: {},
       routeStations: [],
       trainCategory:''}
    ]
  }
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

