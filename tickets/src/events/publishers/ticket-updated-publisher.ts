import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketing-com/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
