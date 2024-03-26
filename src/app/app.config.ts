import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideRouter } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)).ngModule, provideClientHydration()
  ]
};
