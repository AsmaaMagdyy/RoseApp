import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/header/headers.interceptor';
import { BASE_URL } from './../../../../libs/auth/src/lib/auth/base-url';
import { environment } from './core/environments/environment.prod';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation(), withInMemoryScrolling( {scrollPositionRestoration: "top"} ), withViewTransitions()),
     provideHttpClient(withFetch(),withInterceptors([headersInterceptor])),
     provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
     {
      provide: BASE_URL,
      useValue: environment.BaseUrl
    },
     provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
};
