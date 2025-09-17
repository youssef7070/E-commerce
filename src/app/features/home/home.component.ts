import { Component, OnInit, inject } from '@angular/core';

import { CardComponent } from '../../shared/components/card/card.component';
import { ProductsService } from '../../core/services/products/products.service';
import { Products } from '../../core/models/products.interface';
import { PopularCategoriesComponent } from "../popular-categories/popular-categories.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, PopularCategoriesComponent, MainSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // to receive products data
  productList: Products[] = [];
  private productsService = inject(ProductsService);
  ngOnInit(): void {
    this.productsService.getallproducts().subscribe({
      next: (res) => {
        this.productList = res.data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}