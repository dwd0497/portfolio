import exp from "constants";

export interface IProductCharacteristics {
  value: string;
  name: string;
}

export interface IProductReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface IProduct {
  _id: string;
  categorise: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics?: IProductCharacteristics[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: IProductReview[];
  reviewCount: number;
  reviewAvg?: any;
  advantages?: string;
  disadvantages?: string;
}