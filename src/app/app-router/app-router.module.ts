import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'dashboard'},
  { path: 'dashboard', component: DashboardComponent },    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
  
})

export class AppRouterModule { }
export const RoutingComponents = [DashboardComponent];
