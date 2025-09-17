import { Component, Input, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  // @input : to receive data from parent
  @Input() control: any;
  @Input() typeInput!: string;
  // for check out
  @Input() element: string = 'input'
  @Input() idInput!: string;
  @Input() lableInput!: string;
  @Input() type!: string;
  flag: boolean = true;

}
