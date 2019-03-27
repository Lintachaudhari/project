import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { createCustomElement } from '@angular/elements';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { VerticleBarChartComponent } from './charts/verticle-bar-chart/verticle-bar-chart.component';
import { HeatMapComponent } from './charts/heat-map/heat-map.component';
import { TreeMapComponent } from './charts/tree-map/tree-map.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxChartsComponent,
    ChartComponent,
    PieChartComponent,
    LineChartComponent,
    VerticleBarChartComponent,
    HeatMapComponent,
    TreeMapComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  entryComponents: [NgxChartsComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}
     
  ngDoBootstrap() {

    const elements: any[]= [
      [NgxChartsComponent,'ngx-charts']
    ];

    for (const [compnent, name] of elements){
      const el = createCustomElement(compnent, {injector:this.injector});
      customElements.define(name,el);
    }
 

  }
}