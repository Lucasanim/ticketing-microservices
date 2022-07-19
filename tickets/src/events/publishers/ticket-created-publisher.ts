import { Publisher, Subjects, TicketCreatedEvent } from "@ticketing-com/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
