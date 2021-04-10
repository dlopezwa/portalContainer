import { Component, OnInit} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { EventsEmittersService } from 'src/app/services/events-emitters.service';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'App1',
    children: [
      {name: 'Function 1'},
      {name: 'Function 2'},
      {name: 'Function 3'},
    ]
  }, {
    name: 'App2',
    children: [
      {name: 'Function 1'},
      {name: 'Function 2'},
      {name: 'Function 3'},
      {name: 'Function 4'},
      {name: 'Function 5'},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-tree-aplications',
  templateUrl: './tree-aplications.component.html',
  styleUrls: ['./tree-aplications.component.scss']
})
export class TreeAplicationsComponent implements OnInit {

  constructor(private eventsEmittersService: EventsEmittersService) {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
  }

  changeUrl(node: FoodNode) {
    console.log('hago el emmit: ', node);
    let newUrl: string;
    if(node.name == 'Function 1') {
      newUrl = 'http://www.adif.es/es_ES/index.shtml';
    }
    else if(node.name == 'Function 2') {
      newUrl = 'https://angular.io/guide/http';
    }
    else if(node.name == 'Function 3') {
      newUrl = 'https://www.typescriptlang.org/';
    }
    else {
      newUrl = 'https://www.adif.es/es_ES/index.shtml';
    }

    this.eventsEmittersService.url.emit(newUrl);
  }
  
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
