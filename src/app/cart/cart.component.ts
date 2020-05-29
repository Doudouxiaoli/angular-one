import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkOutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItem();
  }

  ouSubmit(customerData) {
    console.warn('You order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }
}
