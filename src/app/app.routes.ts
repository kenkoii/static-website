import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './user/auth.guard';

const APP_ROUTES: Routes =[
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
