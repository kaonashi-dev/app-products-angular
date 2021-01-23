import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  @Input() totalProduct: number = 0;
  @Input() price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
