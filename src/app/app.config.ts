import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
//import { routes } from './app-routing.module'; // Adjust the import path as necessary
//import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// export const appConfig: ApplicationConfig = {
//   // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideHttpClient()],
//   //providers: [provideRouter(routes), provideAnimations(), provideHttpClient()]
//   providers: [
//     provideRouter(routes),
//     provideAnimations(),
//     provideHttpClient(withInterceptors([AuthInterceptor]))
//   ]
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimations(),
    //provideHttpClient(withInterceptorsFromDi())
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    {
      provide: AuthInterceptor,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
