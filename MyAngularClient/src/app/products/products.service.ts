import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

// var host = process.env.COMPONENT_BACKEND_HOST || 'localhost';
// var port = process.env.COMPONENT_BACKEND_PORT || 8081;

const baseUrl = 'http://backendServer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any, responseType?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getProducts() {
    return this.request('get', `${baseUrl}/products`);
  }

  getProduct(id: string) {
    return this.request('get', `${baseUrl}/product/${id}`);
  }

  createProduct(product: Product) {
    console.log('createProduct ' + JSON.stringify(product));
    return this.request('post', `${baseUrl}/product`, product);
  }

  updateProduct(product: Product) {
    console.log('updateProduct ' + JSON.stringify(product));
    return this.request('post', `${baseUrl}/product/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this.request('delete', `${baseUrl}/product/${id}`, null, 'text');
  }
}
