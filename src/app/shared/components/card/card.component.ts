import { Component, inject, Input } from '@angular/core';
import { Products } from '../../../core/models/products.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { CartService } from '../../../features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  imports: [RouterLink,
    CurrencyPipe,
    LowerCasePipe,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // date = new Date()
  @Input({ required: true }) product: Products = {} as Products;
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)

  // add product to cart
  addProductItemToCart(id: string): void {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res)

        // counter
        this.cartService.countNumber.set(res.numOfCartItems);

        console.log(this.cartService.countNumber)

        if (res.status === "success") {
          this.toastrService.success(res.message, "Fresh Card ")
        }
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
