import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verticle-bar-chart',
  templateUrl: './verticle-bar-chart.component.html',
  styleUrls: ['./verticle-bar-chart.component.css']
})
export class VerticleBarChartComponent implements OnInit {

  @Input() barResults
  data:any[];
  view: any[] = [450, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;
  colorScheme = 'vivid'

  // line, area
  autoScale = true;
  constructor() { }
  

  ngOnInit() {
  }

}
