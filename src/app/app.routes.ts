import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FeaturesComponent } from './features/features.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {path: '', pathMatch:'full', component: IndexComponent},
  {path: 'about', pathMatch:'full', component: AboutComponent},
  {path: 'documentation', pathMatch:'full', component: DocumentationComponent},
  {path: 'features', pathMatch:'full', component: FeaturesComponent},
];
