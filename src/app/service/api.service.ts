import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("./assets/data/data.json")
    .pipe(map((res: any) => {
      return res;

  }))
  }
}
