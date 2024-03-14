import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private cartService: CartService) {}

  addOne(item: Item) {
    if(item) {
      this.cartService.addToCart(item);
    }
  }

  removeOne(item: Item) {
    if(item) {
      this.cartService.removeFromCart(item);
    }
  }
}
