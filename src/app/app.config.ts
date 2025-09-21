import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header-interceptor';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { spinnerloadingInterceptor } from './core/interceptors/spinnerloading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([
      headerInterceptor,
      errorInterceptor,
      spinnerloadingInterceptor
    ])),
    provideAnimations(),
    CookieService, // ✅ Provider عادي
    importProvidersFrom(NgxSpinnerModule), // ✅ Module
    provideToastr()
  ]
};
