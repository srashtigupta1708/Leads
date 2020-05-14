import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: ' ', pathMatch: 'full', component: DashboardComponent },
  { path: 'index', pathMatch: 'full', component: DashboardComponent },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
