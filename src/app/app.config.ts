import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)).ngModule,
    provideFirestore(() => getFirestore()).ngModule,
    provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"actionstacklib","appId":"1:588000651620:web:989433d11b8fc9e9b73271","storageBucket":"actionstacklib.appspot.com","apiKey":"AIzaSyDx61H_7SACqt9imitOde8iQA0h2QHbl7o","authDomain":"actionstacklib.firebaseapp.com","messagingSenderId":"588000651620"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
