import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


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
