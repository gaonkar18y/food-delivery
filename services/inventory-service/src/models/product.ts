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


export interface ProductCategory{
    name: string;
    description: string;
    id: number;
}