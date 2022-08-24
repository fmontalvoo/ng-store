import { Category } from "./category.model";

export interface Product {
  id: number;
  price: number;
  title: string;
  images: string[];
  category: Category;
  description: string;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
