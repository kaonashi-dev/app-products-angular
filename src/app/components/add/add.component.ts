import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public name: string = '';
  public price: number = 0;

  constructor(public service: ProductService, private router: Router) { }

  ngOnInit(): void {}

  create() {
    this.service.products.push(
      {
        id: this.service.getRandomString(), name: this.name, price: this.price
      }
    );
    this.name = '';
    this.price = 0;
    Swal.fire({
      title: 'Producto agregado',
      text: 'presiona "ok" para terminar',
      icon: 'success',
      confirmButtonText: 'ok'
    }).then(result => this.router.navigate(['/']));
  }

}
