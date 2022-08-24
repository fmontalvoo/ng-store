import { Category } from "./category.model";

export interface Product {
  id: number;
  title: string;
  price: number;
  taxes?: number;
  images: string[];
  category: Category;
  description: string;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
