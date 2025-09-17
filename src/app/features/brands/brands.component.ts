import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  // set : add data to sign , put value direct dont catch the past value
  // update : add data to sign , put value direct and catch the past value
  // () : to get data

  // properity
  // WritableSignal :change by it
  // to know this part only update to dont check all the component

  // computed api : properity depending on another signal & any edit will know 

  // properit = signal ===> readOnly

  // price: WritableSignal<number> = signal(100);
  // quantity: WritableSignal<number> = signal(100);

  // // readonly
  // hhh: Signal<number> = signal(10).asReadonly()

  // totalPrice: Signal<number> = computed(() => this.price() * this.quantity());

  // changePrice(): void {
  //   this.price.update((value) => value + 10);
  // }

}
