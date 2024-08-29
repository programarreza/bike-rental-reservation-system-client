export type TBike = {
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  image: string;
  brand: string;
};

export type TRent = {
  _id: string;
  userId: string;
  bikeId: TBike;
  startTime: string;
  returnTime: string;
  totalCost: number;
  transactionId: string;
  advanced: number;
  isAdvanced: boolean;
  isPaid: boolean;
  isReturned: boolean;
  __v: number;
};

export type TBookingResponse = {
  id: string,
  bikeId: string
}
