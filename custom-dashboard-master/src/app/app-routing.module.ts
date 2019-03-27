import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

const routes: Routes = [
  {
    path:'',
    component: NgxChartsComponent
  },
  {
    path:'ngx-charts',
    component: NgxChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
