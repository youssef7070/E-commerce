import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

// HttpClient => to can mak  e (GET, POST, PUT, DELETE)
// jwtDecode => to decode Token

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router)

  // register
  registerForm(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'auth/signup', data);
  }

  // login
  loginForm(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'auth/signin', data);
  }

  // logout 
  logOut(): void {
    // remove token cookies
    this.cookieService.delete('token')
    // naviagte to login
    this.router.navigate(['/login'])
  }

  // decode Token

  docodeToken() {
    let token;
    try {
      token = jwtDecode(this.cookieService.get('token'))
    }
    // if token is empty or damaged
    catch (error) {
      this.logOut()
    }
    return token
  }

  // forget

  // 1)Email

  submitVerifyEmail(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + `auth/forgotPasswords`, data)
  }

  // 2)Code
  submitVerifyCode(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + `auth/verifyResetCode`, data)
  }

  // 3)Password
  submitResetPassword(data: object): Observable<any> {
    return this.httpClient.put(environment.baseUrl + `auth/resetPassword`, data)
  }

}
