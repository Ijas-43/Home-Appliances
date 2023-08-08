import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public totalItem ! : number;
  // public totalItem : number = 0;
  constructor(private cartService : CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.totalItem = this.cartService.getTotalPrice();
    })
    console.log(this.products)
  }


  decrease(item : any){
    if(item.quantity !=1 ) {
      item.quantity -= 1;
    }
  }

  increase(item :any) {
    if(item.quantity !=5 ) {
      item.quantity += 1;
    }
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
