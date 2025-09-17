import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "../../../shared/components/input/input.component";
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authServices = inject(AuthServiceService)
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService)
  isLoading: boolean = false;
  msgError: string = "";

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm()
  }


  constructor(private fb: FormBuilder) { }
  initForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    },
    );
  }

  // submit

  submitForm(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // return object have data to Api
      this.authServices.loginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {

            this.cookieService.set('token', res.token);
            // call docodeToken to decode informations and see her informations (id , role , ... )
            console.log(this.authServices.docodeToken())
            this.msgError = "";
            setTimeout(() => {
              this.router.navigate(['/home']);
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
  }
}
