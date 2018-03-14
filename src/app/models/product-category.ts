export class ProductCategory {
  constructor(
    public id: number,
    public name: string,
    public products: number
  ) {}
}

export class CategoryCount {
  constructor(
    public category: ProductCategory,
    public count: number
  ) {}
}
