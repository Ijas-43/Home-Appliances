import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  public filterCategory : any;
  public showMyMessage = false;
searchKey:string ="";
public searchTerm !: string;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory =res;


      this.productList.forEach((a: any) => {
        Object.assign(a,{ quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

  this.cartService.search.subscribe((val:any)=>{
    this.searchKey=val;
  })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    setTimeout(() => {
      this.showMyMessage = true
    },3000)
  }
filter(category:string){
this.filterCategory = this.productList
.filter((a:any)=>{
  if(a.category == category || category ==''){
    return a;
  }
})
}

search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
}
}
