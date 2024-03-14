import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreItemComponent } from './store/store-item/store-item.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, StoreItemComponent, CartItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
