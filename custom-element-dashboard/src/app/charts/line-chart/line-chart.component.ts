import { Component, OnInit, Input } from '@angular/core';
import { data } from './line-data'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  data:any[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;
  colorScheme = 'vivid'

  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {data})   
   }

  ngOnInit() {
  }

}
