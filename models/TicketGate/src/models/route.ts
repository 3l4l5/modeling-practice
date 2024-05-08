import { Station } from "./station";

export class Route {
  _departureStation: Station;
  _arrivalStation: Station;
  constructor(departureStation: Station, arrivalStation: Station) {
    this._departureStation = departureStation;
    this._arrivalStation = arrivalStation;
  }
  calcFare() {
    return 200;
  }
}
