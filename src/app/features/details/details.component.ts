import { DetailsService } from './../../core/services/details/details.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../core/models/products.interface';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailsServices = inject(DetailsService);
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)

  id: string | null = null;
  productDtails: Products = {} as Products;

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
  }

  // product id
  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
        this.id = urlParams.get('id');
      },
    }
    )
  }

  // product details
  getProductDetailsData(): void {
    this.productDetailsServices.getProductDetails(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.productDtails = res.data;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

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

};

