import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products: Product[] = [
    {
      id: this.getRandomString(),
      name: 'Manzana',
      price: 1000
    },
    {
      id: this.getRandomString(),
      name: 'Camisa',
      price: 30000
    }, {
      id: this.getRandomString(),
      name: 'Laptop',
      price: 1000000
    }
  ];

  public getTotal(): number {
    let total: number = 0;
    this.products.forEach(item => total += item.price);
    return total;
  }

  public getRandomString():string {
    let str = '';
    for (let i = 0; i < 5; i++) {
      let rand = Math.floor(Math.random() * 62);
      let charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
      str += String.fromCharCode(charCode);
    }
    return str;
  }
}
