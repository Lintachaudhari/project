import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { createCustomElement } from '@angular/elements';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { VerticleBarChartComponent } from './charts/verticle-bar-chart/verticle-bar-chart.component';
import { HeatMapComponent } from './charts/heat-map/heat-map.component';
import { TreeMapComponent } from './charts/tree-map/tree-map.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxChartsComponent,
    PieChartComponent,
    LineChartComponent,
    VerticleBarChartComponent,
    HeatMapComponent,
    TreeMapComponent,
    HorizontalBarChartComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    DragulaModule
  ],
  providers: [],
  entryComponents: [NgxChartsComponent,LayoutComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}
     
  ngDoBootstrap() {

    const elements: any[]= [
      [NgxChartsComponent, 'ngx-charts'],
      [LayoutComponent,'app-layout']
    ];

    for (const [compnent, name] of elements){
      const el = createCustomElement(compnent, {injector:this.injector});
      customElements.define(name,el);
    }
 
  }
}
