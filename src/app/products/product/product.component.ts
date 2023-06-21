import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public product: Product;
  public quantities: Array<number>;

  constructor(){}

  ngOnInit(){
    this.product = {
      name: 'ASUS Zenbook Pro Duo OLED 14.5',
      imgUrl: 'http://via.placeholder.com/100x100',
      price: 2400.69,
      isOnSale: true,
      qtyInCart: 0
    };
    this.quantities = [];
    for(let i = 1; i <= 20; i++){
      this.quantities.push(i);
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

  // onQtyChange(qty){
  //   console.log('Quantity change ', qty);
  // }
}
