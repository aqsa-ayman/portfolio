import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProjectsComponent } from './core/projects/projects.component'
import { LandingPageComponent } from './core/landing-page/landing-page.component';
 
export const appRoutes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: LandingPageComponent },
  { path: 'projects', loadChildren: 'app/core/projects/projects.module#ProjectsModule' }
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
