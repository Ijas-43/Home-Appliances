import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public product : any ;
  public productList : any ;
  public filterCategory : any;
searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {  
    this.api.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

  this.cartService.search.subscribe((val:any)=>{
    this.searchKey=val;
  })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category ==''){
        return a;
      }
    })
    }


}
