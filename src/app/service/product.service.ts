import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products: Product[] = [
    {
      id: 1,
      name: 'Manzana',
      price: 1000
    },
    {
      id: 2,
      name: 'Camisa',
      price: 30000
    }, {
      id: 3,
      name: 'Laptop',
      price: 1000000
    }
  ];

  public getTotal(): number {
    let total: number = 0;
    this.products.forEach(item => total += item.price);
    return total;
  }

}
