import { Schema, model, Document } from "mongoose";
interface IBooking {
  userId: number;
  screeningId: number;
  seatNumbers: string[];
  totalPrice: number;
  bookingDate: Date;
}
interface IBookingDocument extends IBooking, Document {}
const BookingSchema = new Schema<IBookingDocument>({
  userId: { type: Number, required: true },
  screeningId: { type: Number, required: true },
  seatNumbers: { type: [String], required: true },
  totalPrice: { type: Number, required: true },
  bookingDate: { type: Date, required: true },
});
const Booking = model<IBookingDocument>("Booking", BookingSchema);
export default Booking;


