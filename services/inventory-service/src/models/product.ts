export interface ProductRequest{
    categoryId: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface Product extends ProductRequest{
   id: number;
}