import { ProductDetails } from "./product-details.model";

export interface Product {
    imageUrls: string[],
    code: string,
    name: string,
    price: number,
    availableColors: string[],
    availableSizes: string[],
    details: ProductDetails,
}