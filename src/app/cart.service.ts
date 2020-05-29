import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {
  }


//  商品添加到购物车
  addToCart(product) {
    return this.items.push(product);
  }

// 获取商品信息
  getItem() {
    return this.items;
  }

// 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }

//  该方法使用 HttpClient#get() 方法检索配送数据（类型和价格）。
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
