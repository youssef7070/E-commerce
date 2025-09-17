import { Component } from '@angular/core';
import { NavComponent } from "../../../shared/components/nav/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
