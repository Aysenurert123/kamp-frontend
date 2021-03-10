import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModule } from '../models/productResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44314/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ProductResponseModule> {
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
