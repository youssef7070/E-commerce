import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly httpClient = inject(HttpClient)
  private readonly cookieService = inject(CookieService)

  // BehaviorSubject = can make subscribe and take the last value
  // next : put data
  // get : take data without subscribe
  //  subscribe : take data subscribe 

  // countNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  countNumber: WritableSignal<number> = signal(0);

  // cart
  addProductToCart(id: string): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'cart',
      {
        productId: id,
      },

    )
  }

  // logged
  getLoggedUserCart(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'cart',

    )
  }

  // remove
  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + `cart/${id}`,

    )
  }

  // update
  updateCartCount(id: string, count: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + `cart/${id}`,
      {
        count: count
      },

    );
  }

  // check out session
  checkOutSession(id: string | null, data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + `orders/checkout-session/${id}?url=http://localhost:4206`, data,

    )
  }

}

// post , put  ===>  url(api) , body , options(header)
