import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() pieChartData
  @Input() pieColorSchema
  @Input() pieShowLegend
  @Input() pieGradient
  
  

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
