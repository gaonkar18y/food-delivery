export interface ProductRequest{
    categoryId: number;
    name: string;
    description: string;
    price: number;
}

export interface Product extends ProductRequest{
   id: number;
}