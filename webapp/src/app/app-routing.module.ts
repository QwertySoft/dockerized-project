import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './features/feature-one/pages/page-one/page-one.component';
import { LandingPageComponent } from './features/landing/pages/landing-page/landing-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Definicion de ruta por defecto
  { path: '', children: [ // Definicion de rutas que utilizan el layout principal
      { path: 'one', component: PageOneComponent },
      { path: '', component: HeaderComponent, outlet: 'header' },
      { path: '', component: FooterComponent, outlet: 'footer' },
    ]
  },
  { path: 'home', component: LandingPageComponent }, // Ruta para el home del sitio que no utiliza el layout principal
  { path: '**', component: NotFoundPageComponent } // Página 404 que no utiliza el layout principal
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Se importan las rutas que definimos
  exports: [ RouterModule ] // Se exportan las rutas que definimos al resto de la app
})
export class AppRoutingModule { }
