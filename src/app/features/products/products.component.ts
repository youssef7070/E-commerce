import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ مهم
import { Products } from '../../core/models/products.interface';
import { CardComponent } from "../../shared/components/card/card.component";
import { NgxPaginationModule } from 'ngx-pagination'; //
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent, NgxPaginationModule, SearchPipe, ɵInternalFormsSharedModule, FormsModule], // ✅ لازم تضيف CommonModule
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private readonly productsService = inject(ProductsService);

  productList: Products[] = [];
  theSearch: string = '';
  // pagination
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(pageNumber: number = 1): void {



    this.productsService.getallproducts(pageNumber).subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.productList = res.data;
        // pagination
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results;

      },
      error: (err) => {
        console.error('there are error : check api ', err);

      }
    })
  }

}
