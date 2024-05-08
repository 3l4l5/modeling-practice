import { Payment } from "./payment";
import { Route } from "./route";
import { Station } from "./station";

export abstract class PayMethod {
  _departureStation: Station;
  constructor(departureStation: Station) {
    this._departureStation = departureStation;
  }
  getStation(): Station {
    return this._departureStation;
  }
  public abstract pay(station: Station): boolean;
}

export class IcCard extends PayMethod {
  public pay(station: Station) {
    const route = new Route(this._departureStation, station);
    const fare = route.calcFare();
    return true;
  }
}

export class Ticket extends PayMethod {
  public pay(station: Station) {
    return true;
  }
}
