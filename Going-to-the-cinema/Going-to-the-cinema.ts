export class G964 {
  public static movie(card: number, ticket: number, perc: number): number {
    let ticketA = 0;
    let lastTicketB = ticket;
    let ticketB = card;
    let counter = 0;
    while (Math.ceil(ticketB) >= ticketA) {
      ticketA += ticket;
      ticketB = ticketB + lastTicketB * perc;
      lastTicketB *= perc;
      counter++;
    }
    return counter;
  }
}
