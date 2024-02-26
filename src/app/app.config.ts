import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApiKeyInterceptor } from './common/interceptors/api-key-interceptor.service';
import { AuthInterceptor } from './common/interceptors/authInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        ApiKeyInterceptor,
        AuthInterceptor
      ])
    ),
  ],
};
