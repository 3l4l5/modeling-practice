import { PayMethod } from "./payMethod";
import { Station } from "./station";

export class TicketGate {
  station: Station;
  constructor(station: Station) {
    this.station = station;
  }
  public enter(payMethod: PayMethod): boolean {
    return payMethod.pay(this.station);
  }
}
