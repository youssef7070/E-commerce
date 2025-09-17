import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-categories',
  imports: [CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  role: string = "user";
  friends: string[] = ["youssef", "ahmed", "ali"]

}