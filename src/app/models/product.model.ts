import { Rating } from "./rating.model";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

// export interface Product {
//   id: string | number;
//   img: string;
//   name: string;
//   price: number;
//   description?: string;
// }
