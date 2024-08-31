import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TBike = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  image: string;
  brand: string;
  __v: number;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isDeleted: boolean;
};

export type TRent = {
  _id: string;
  userId: TUser;
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
  id: string;
  bikeId: string;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  meta?: TMeta;
  statusCode: number;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type CustomError = {
  status: number;
  data?: {
    message?: string;
  };
};

export type TJwtPayload = {
  email: string;
  role: string; 
}