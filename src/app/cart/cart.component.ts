import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
@Component({
  selector: " t",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  products = [];

  ngOnInit() {
    this.products = this.cartService.getItems();
  }
}
