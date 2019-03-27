import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {

  @Input() treeMapResult
  view: any[] = [450, 400];
  colorScheme="flame"
 
  constructor() { }

  ngOnInit() {
  }

}
