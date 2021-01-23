import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Manzana',
        price: 1000
      },
      {
        id: 2,
        name: 'Camisa',
        price: 30000
      },{
        id: 3,
        name: 'Laptop',
        price: 1000000
      }
    ]
  }

  onDelete(product: Product){
    this.products = this.products.filter(item => item.id != product.id);
  }
}
