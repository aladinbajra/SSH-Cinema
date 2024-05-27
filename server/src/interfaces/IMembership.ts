interface Membership {
    id: number;
    userId: number;
    type: 'Basic' | 'Premium';
    startDate: Date;
    endDate: Date;
  }
