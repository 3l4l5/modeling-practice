import { IcCard } from "../../src/models/payMethod";
import { Station } from "../../src/models/station";
import { TicketGate } from "../../src/models/ticketGate";

describe("TicketGate", () => {
  test("enter", () => {
    const thisStation = new Station();
    const ticketGate = new TicketGate(thisStation);
    const departureStation = new Station();
    const icCard = new IcCard(departureStation);
    const result = ticketGate.enter(icCard);
    expect(result).toBe(true);
  });
  test("運賃が足りないケース", () => {
    const thisStation = new Station();
    const ticketGate = new TicketGate(thisStation);
    const departureStation = new Station();
    const icCard = new IcCard(departureStation);
    const result = ticketGate.enter(icCard);
    expect(result).toBe(false);
  });
});
