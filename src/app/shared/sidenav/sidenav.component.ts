import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  url: string;
  
  constructor() { 
    this.url='';
  }

  ngOnInit(): void {

  }
  mode = new FormControl('over');

  changeUrl(newUrl: any) {
    console.log();
    this.url = newUrl;
    console.log('Nueva URL: ', newUrl);
  }

}
