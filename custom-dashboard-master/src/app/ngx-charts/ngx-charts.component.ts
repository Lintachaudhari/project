import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {single, multi, data} from './data';
import * as dragula from 'dragula';
declare var $: any;
@Component({
  selector: 'ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NgxChartsComponent implements OnInit {

  single: any[];
  multi: any[];
  data: any[];
  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  timeline = true;
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // line, area
  autoScale = true;
  constructor() { 
    Object.assign(this, {single, multi, data})   
  }

  onSelect(event) {
    console.log(event);
  }

  colorScheme = {
    domain: ['#e83e8c', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  };
 
  ngOnInit() {
    
    $(function() {
      var d = dragula({
        invalid: function(el, target) {
          return $(el).hasClass('ui-resizable-handle')
        }
      })
      $('.row').each(function() {
        d.containers.push(this)
      })
  })
  }
}
