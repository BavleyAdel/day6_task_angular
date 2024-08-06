import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../components/list-product/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  detailedProduct!:IProduct;
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products`);
  }
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${productId}`);
  }
}
