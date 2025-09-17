import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { InputComponent } from "../../../shared/components/input/input.component";
import { Subscription } from 'rxjs';

// FormGroup => to can make FormGroup
// Validators => it contain (required , email , pattern , ...)
// AbstractControl => make codition on specific inputs
// FormBuilder => to can make fb.group (best then new group)
// ReactiveFormsModule => to can make Reactive Module
// Rouetr => to can navigate to login page


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private readonly authServices = inject(AuthServiceService)
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  // to store current subscription & will cancel before make new one
  subscription: Subscription = new Subscription();
  flag: boolean = true;
  isLoading: boolean = false;
  // "" => to make the msgError in first & delete the red area
  msgError: string = "";
  // it is not null & her type is FormGroup
  registerForm!: FormGroup;


  ngOnInit(): void {
    this.initForm()
  }


  initForm(): void {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      // at least 6 words or numbers
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: [null, Validators.required],
      // 01 (0 or 1 or 1 or 5) after that 8 numbers
      phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    },
      // to see if the validator in this function is ok or no
      { validators: this.confirmPassword });
  }


  confirmPassword(group: AbstractControl) {
    const passwordControl = group.get('password');
    const rePasswordControl = group.get('rePassword');

    // if one if them is not existing dont return any thing
    if (!passwordControl || !rePasswordControl) {
      return null;
    }
    // passwordControl not equale rePasswordControl
    // set error on rePassword (make mismatch true)
    if (passwordControl.value !== rePasswordControl.value) {
      rePasswordControl.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    else {
      // passwordControl equale rePasswordControl
      if (rePasswordControl.hasError('mismatch')) {
        rePasswordControl.setErrors(null);
      }
      return null;
    }
  }

  //  submitForm()

  submitForm(): void {
    if (this.registerForm.valid) {

      // cancel last subscription
      // appear the loading icon 
      this.subscription.unsubscribe();
      this.isLoading = true;
      // return object have data to Api
      this.subscription = this.authServices.registerForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          // if it is succes
          if (res.message === 'success') {
            this.msgError = "";
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      });
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}