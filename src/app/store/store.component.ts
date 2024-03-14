import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{
  
  constructor(private _groceryService: GroceryService) {}
  
  items = this._groceryService.getGroceries()
  
}
