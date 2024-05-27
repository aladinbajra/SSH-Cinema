
import { Schema, model, Document } from 'mongoose';


interface ITicket extends Document {
  userId: number;
  screeningId: number;
  seatNumber: string;
  price: number;
}


const TicketSchema = new Schema<ITicket>({
  userId: { type: Number, required: true },
  screeningId: { type: Number, required: true },
  seatNumber: { type: String, required: true },
  price: { type: Number, required: true },
});


const Ticket = model<ITicket>('Ticket', TicketSchema);

export default Ticket;
