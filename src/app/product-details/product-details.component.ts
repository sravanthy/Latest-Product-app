import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  product: any;

  //constructor used for DI
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  //LifecycleHook
  ngOnInit() {
    //call a get API
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get("productId")];
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Product has been added to Cart...");
  }
}
