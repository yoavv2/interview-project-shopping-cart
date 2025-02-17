import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}
  @Input() products: any[];
  @Output() productRemove: any = new EventEmitter();

  calcTotalItems() {
    const total = this.products.reduce(
      (acc, prod) => (acc += Number(prod.quantity)),
      0
    );
    return Number(total);
  }
  calcTotalPrice() {
    const total = this.products.reduce(
      (acc, prod) => (acc += prod.price * prod.quantity),
      0
    );
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(total);
  }

  ngOnInit(): void {}
}
