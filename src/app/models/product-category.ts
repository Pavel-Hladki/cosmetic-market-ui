export class ProductCategory {
  constructor(
    public id: number,
    public name: string
  ) {}
}

export class CategoryCount {
  constructor(
    public category: ProductCategory,
    public count: number
  ) {}
}
