import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../shared/components/input/input.component";
import { AuthServiceService } from '../services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder)
  private readonly authServiceService = inject(AuthServiceService)
  private readonly cookieService = inject(CookieService)
  private readonly router = inject(Router)

  verifyEmail!: FormGroup;
  verifyCode!: FormGroup;
  resetPassword!: FormGroup;

  step: number = 1;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {

    this.verifyEmail = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    })

    this.verifyCode = this.fb.group({
      resetCode: [null, [Validators.required]]
    })

    this.resetPassword = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]]
    })


  }

  // step 1
  formStep1(): void {
    if (this.verifyEmail.valid) {
      this.authServiceService.submitVerifyEmail(this.verifyEmail.value).subscribe({
        next: (res) => {
          console.log(res)
          this.step = 2;
          this.resetPassword.get('email')?.setValue(this.verifyEmail.get('email')?.value);

        }
      });
    }
  }

  // step 2
  formStep2(): void {
    if (this.verifyCode.valid) {
      this.authServiceService.submitVerifyCode(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res)
          this.step = 3;
        }
      });
    }
  }

  // step 3
  formStep3(): void {
    if (this.resetPassword.valid) {
      this.authServiceService.submitResetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          console.log(res)
          // save token
          this.cookieService.set('token', res.token)
          // navigate home
          this.router.navigate(['/home'])
        }
      });
    }
  }


}
