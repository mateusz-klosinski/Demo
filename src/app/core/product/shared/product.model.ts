import { ProductColor } from "./product-color.model";

export interface Product {
    imageUrls: string[],
    code: string,
    name: string,
    price: number,
    availableColors: ProductColor[],
    availableSizes: string[],
    
}