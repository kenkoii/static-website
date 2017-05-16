import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
// import { AuthGuard } from './user/auth.guard';

const APP_ROUTES: Routes =[
  { path: '', component: CompanyComponent, pathMatch: 'full'},
  { path: 'products', component: ProductsComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent, pathMatch: 'full'},
  { path: 'team', component: TeamComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent, pathMatch: 'full'},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
