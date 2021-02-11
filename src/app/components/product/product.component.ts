import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  totalPrice: number = 0;
  totalProduct: number = 0;

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.products = this.service.products;
    this.totalProduct = this.products.length;
    this.totalPrice = this.service.getTotal();
  }

  onDelete(product: Product) {
    this.service.products = this.service.products.filter(item => item.id != product.id);
    this.products = this.service.products;
    this.totalProduct = this.products.length;
    this.totalPrice = this.service.getTotal();
  }
}
