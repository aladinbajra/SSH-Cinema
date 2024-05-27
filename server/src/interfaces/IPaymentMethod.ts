interface UserPaymentMethod {
    id: number;
    userId: number;
    cardNumber: string;
    expirationDate: Date;
    cvv: string;
  }
