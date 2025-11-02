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

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation(), withInMemoryScrolling( {scrollPositionRestoration: "top"} ), withViewTransitions()),
     provideHttpClient(withFetch(),withInterceptors([headersInterceptor])),
     {
      provide: BASE_URL,
      useValue: environment.BaseUrl
    }
  ],
};
