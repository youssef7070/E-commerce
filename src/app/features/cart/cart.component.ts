import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService)

  cartDetails: Cart = {} as Cart

  ngOnInit(): void {
    this.getLoggedUserData()
  }

  // logged cart
  getLoggedUserData(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        console.log(res.data)
        this.cartDetails = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  // remove item
  removeItem(id: string): void {
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        // this.getLoggedUserData()
        this.cartDetails = res.data
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  // update 
  updateCount(id: string, count: number): void {
    this.cartService.updateCartCount(id, count).subscribe({
      next: (res) => {
        console.log(res)
        // remove data for counter
        this.cartService.countNumber.set(res.numOfCartItems)
        // this.getLoggedUserData()
        this.cartDetails = res.data
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
