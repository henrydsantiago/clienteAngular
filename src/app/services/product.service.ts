import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from "../interfaces/Product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  CORS_URL: string = 'https://cors-anywhere-production-7c8c.up.railway.app/'
  BASE_URL: string = 'https://apirest-nestjs-production.up.railway.app'


  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.CORS_URL}${this.BASE_URL}/product/`)
  }

  getProduct(id:string): Observable<Product>{
    return this.http.get<Product>(`${this.CORS_URL}${this.BASE_URL}/product/${id}`)
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.CORS_URL}${this.BASE_URL}/product/create`, product,{responseType:"json"})
  }

  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(`${this.CORS_URL}${this.BASE_URL}/product/delete?productID=${id}`)
  }
  updateProduct(id:string, product:Product){
    return this.http.put<Product>(`${this.CORS_URL}${this.BASE_URL}/product/update?productID=${id}`, product)
  }

}
