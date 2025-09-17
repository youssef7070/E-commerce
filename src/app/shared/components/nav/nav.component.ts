import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../../core/services/flowbite.service';
import { Component, computed, inject, Input, OnInit, PLATFORM_ID, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';
import { CartService } from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private FlowbiteService: FlowbiteService) { }

  private readonly authServiceService = inject(AuthServiceService)
  private readonly cartService = inject(CartService)
  private readonly id = inject(PLATFORM_ID)

  // use it in auth and blank
  @Input({ required: true }) isLogin!: boolean;

  count: Signal<number> = computed(() => this.cartService.countNumber())

  ngOnInit(): void {
    // flowbite
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    // cart
    if (isPlatformBrowser(this.id)) {
      this.getAllDataCart()
    }

  }




  // getAllDataCart : when open the count have number
  // make it to the changes mkake in servies not in count variable
  getAllDataCart(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartService.countNumber.set(res.numOfCartItems)
      }
    })
  }

  // sign out
  signOut(): void {
    this.authServiceService.logOut()
  }

}
