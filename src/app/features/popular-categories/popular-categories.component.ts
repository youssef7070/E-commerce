import { Category } from '../../core/models/category.interface';
import { CategoriesService } from './../../core/services/categories/categories.service';
import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.css'
})
export class PopularCategoriesComponent {
  // api
  private readonly categoriesService = inject(CategoriesService);

  categoriesList: Category[] = []

  ngOnInit(): void {
    this.loadCategoriesData()
  }

  loadCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  // slider
  categoriesOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 4 },
      1024: { items: 6 },
      1280: { items: 8 },
      1536: { items: 10 }
    },
    nav: false
  }

}


