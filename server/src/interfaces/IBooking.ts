interface Booking {
    id: number;
    userId: number;
    screeningId: number;
    seatNumbers: string[]; // Array of seat numbers booked
    totalPrice: number;
    bookingDate: Date;
  }
