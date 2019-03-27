import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  @Input() heatMapResults
  data:any[];
  view: any[] = [450, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
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
