import {ProductCategory} from "./product-category";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public category: ProductCategory,
    public properties: ProductProperty[],
    public brand: string,
    public briefDescription: string,
    public mainImage: string,
    public otherImages: string[],
    public description: ProductDescription,
    public price: number,
    public overallRating: number
  ) {}
}

export class ProductDescription {
  constructor(
    public details: string,
    public activeIngredients: string,
    public properties: string,
    public directions: string
  ) {}
}

export class ProductProperty {
  constructor(
    public name: string,
    public values: string[]
  ) {}
}
