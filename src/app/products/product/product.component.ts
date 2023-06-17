import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public product: Product;

  constructor(){}

  ngOnInit(){
    this.product = {
      name: 'ASUS Zenbook Pro Duo OLED 14.5',
      imgUrl: 'http://via.placeholder.com/100x100',
      price: 2400.69,
      isOnSale: true,
      qtyInCart: 0
    }
  }

  incrInCart(){
    this.product.qtyInCart++;
  }

  decrInCart(){
    if(this.product.qtyInCart > 0){
      this.product.qtyInCart--;
    }
  }
}
